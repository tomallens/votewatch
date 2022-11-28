DROP TABLE IF EXISTS "public"."users";

CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE "public"."users" (
    id SERIAL,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password CHAR(32) NOT NULL,
    mpname VARCHAR(40) NOT NULL,
    status BOOLEAN NOT NULL DEFAULT TRUE,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."users" ("name", "email", "password", "mpname") VALUES
('gordon', 'gordon@email.com', '123456', 'Keir Starmer'),
('dave', 'dave@email.com', 'qwerty', 'Boris Johnson'),
('liz', 'liz@email.com', 'password', 'Theresa May');

