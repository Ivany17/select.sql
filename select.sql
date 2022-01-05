SELECT * 
FROM "users";

SELECT "first_name", "email", "height" 
FROM "users";

SELECT * 
FROM "users"
WHERE "is_male"=true;

SELECT * 
FROM "users"
WHERE "id"%2=0 AND "is_male"=false;

SELECT * 
FROM "users"
WHERE "first_name"='Julia';