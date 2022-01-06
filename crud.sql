ALTER TABLE "users"
ADD COLUMN "weight" INT CHECK ("weight" BETWEEN 0 AND 250);

SELECT *
FROM "users";

UPDATE "users"
SET "weight" = ("height"-1)*100;

UPDATE "users"
SET "weight" = 55
WHERE "first_name"='Anna';

SELECT *
FROM "users"
WHERE "first_name"='Anna';

UPDATE "users"
SET "last_name" = "Qwerty"
WHERE "id"=2112;

DELETE FROM "users"
WHERE "id"=2112;

UPDATE "users"
SET "weight" = 57
WHERE "first_name"='Anna'
RETURNING "id", "weight", "email", "height";

SELECT "id" AS "Номер",
    concat ("first_name", ' ', "last_name") AS "Полное имя",
    "email" AS "Почта"
FROM "users" AS "u"
WHERE "u"."first_name"='Anna';


SELECT "id",
    concat ("first_name", ' ', "last_name") AS "Full name",
    length(concat ("first_name", ' ',"last_name")) AS "length"
FROM "users"
WHERE length(concat("first_name", ' ',"last_name"))=9
LIMIT 10;

SELECT *
FROM (
        SELECT "id",
            concat ("first_name", ' ', "last_name") AS "Full name",
            length(concat ("first_name", ' ',"last_name")) AS "length"
        FROM "users"
    ) AS "tableFN"
WHERE "tableFN"."length"=9
LIMIT 10;