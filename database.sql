CREATE DATABASE "giphy_search_favorites";

-- giphy favorites
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "image_url" VARCHAR (250) NOT NULL,
    "category_id" INT DEFAULT NULL
)

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('vega'), ('cartoon'), ('nsfw'), ('meme');
