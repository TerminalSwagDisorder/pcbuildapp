SELECT * FROM "cpu" WHERE "id" IN (SELECT "id" FROM "cpu" WHERE "name" LIKE "%AMD%" ORDER BY RANDOM() LIMIT 1);