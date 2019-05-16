select * from gpu where price between 0 and 150 and chipset not like "%710%" and chipset not like "%730%" and chipset not like "%R5%" and chipset not like "%Radeon HD%" and chipset not like "%R7%" and chipset not like "%Quadro%"  and chipset not like "%210%";
select * from gpu where price between 200 and 350 and chipset not like "%710%" and chipset not like "%730%" and chipset not like "%R5%" and chipset not like "%Radeon HD%" and chipset not like "%R7%" and chipset not like "%Quadro%"  and chipset not like "%210%" and chipset not like "%FirePro%";
select * from gpu where price between 500 and 1000 and chipset not like "%710%" and chipset not like "%730%" and chipset not like "%R5%" and chipset not like "%Radeon HD%" and chipset not like "%R7%" and chipset not like "%Quadro%"  and chipset not like "%210%" and chipset not like "%FirePro%";




select * from cpu where name like "%I3%";
select * from cpu where name like "%I3%" and name not like "%F%";
select * from cpu where name like "%I3%" and name not like "%K%" and name not like "%X%";
select * from cpu where name like "%Ryzen 3%";
select * from cpu where name like "%I5%";
select * from cpu where name like "%I5%" and name not like "%F%";
select * from cpu where name like "%I3%" and name not like "%K%" and name not like "%X%";
select * from cpu where name like "%Ryzen 5%";
select * from cpu where name like "%I7%";
select * from cpu where name like "%I7%" and name not like "%F%";
select * from cpu where name like "%I7%" and name not like "%K%" and name not like "%X%";
select * from cpu where name like "%Ryzen 7%";

select * from storage where type like "%SSD%";
select * from storage where type like "%SSD%" and form like "%2.5%";
select * from storage where type like "%SSD%" and form like "%M.2%";
select * from storage where type like "%SSD%" and form like "%PCI-E%";
select * from storage where type like "%7200%" and form not like "%2.5%";
select * from storage where type like "%Hybrid%" and form not like "%2.5%";
