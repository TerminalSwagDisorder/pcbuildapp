import sqlite3
import json
from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql.expression import ColumnClause
from sqlalchemy.sql import table, column, select, update, insert, delete
from sqlalchemy.ext.declarative import *
from sqlalchemy import create_engine
engine = create_engine('sqlite:////home/benjaminlinux/github/pcbuildapp/pcbuildapp/pcbuildapp_new_db.db', echo=True, pool_pre_ping=True)
from pcpartpickerapi import part_lists


Session = sessionmaker(bind=engine)
Session.configure(bind=engine)
session = Session(bind=engine)



def transform(key,value):
    #remove one character at the beginning
    if key == "price":
        value = value[1:]
        return str(value)
        if value == str(value):
            return float(str(value))
    #remove characters at the end
    elif key == "tdp":
        value = value[:-2]
        return int(value)
    elif key == "wattage":
        value = value[:-2]
        return int(value)
    elif key == "price/gb":
        value = value[:-2]
        return int(value)
    elif key == "socket":
        value = value[:-3]
        return str(value)
    else:
        return value


print("\nRegion changed to De")
'''
for i in cpu_info:
    print(i)
'''


print("Inserting data into database")

# define metadata information
metadata = MetaData(bind=engine)

# table

cpu = Table("cpu", metadata,
	Column("id", INTEGER, primary_key=True, autoincrement=True),
	Column("name", TEXT),
	Column("core-count", TEXT),
	Column("core-clock", TEXT),
	Column("boost-clock", TEXT),
	Column("tdp", INTEGER),
	Column("integrated-graphics", TEXT),
	Column("simultaneous-multithreading", TEXT),
	Column("ratings-count", TEXT),
	Column("price", INTEGER)
)

'''
cpu = Table('cpu', metadata,
    Column('name', TEXT),
    Column('core-clock', TEXT),
    Column('boost-clock', TEXT),
    Column('core-count', TEXT),
    Column('tdp', Integer),
    Column('ratings-count', TEXT),
    Column('price', Integer),
	Column("integrated-graphics", TEXT),
	Column("simultaneous-multithreading", TEXT),
    Column('id', TEXT, primary_key=True)
)
'''

print("Total CPU pages:", part_lists.list_page_count("cpu", region="de"))

a = 0
tot_cpu = part_lists.list_page_count("cpu", region="de")

print("\nExtracting and updating data")

# extraction
#print("Page #",a)
#while a < tot_cpu:
#    print("\nPage #",a+1,"\n")
#    a += 1
    
cpu_info =  part_lists.get_list("cpu", page=0, region="de")
cpu_info = [{key:transform(key,value) for key,value in cpu.items()} for cpu in cpu_info]

        #insert in chunks
page_length = len(part_lists.get_list("cpu", a))
cursor = 0
chunk_size = 50
while cursor < page_length:
        # insert
    i = insert(cpu)
    i = i.values(cpu_info[cursor:cursor+chunk_size])
    session.execute(i)
    session.commit()
    cursor+=chunk_size

    # delete
    dlt = cpu.delete().where(cpu.c.price == '')
    session.execute(dlt)
    session.commit()
print("\nInsertion done")

print("Inserting data into database")
