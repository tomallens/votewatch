CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password CHAR(32) NOT NULL,
  postcode VARCHAR(10) NOT NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO users (name, email, password, postcode) VALUES ('gordon', 'gordon@email.com', MD5('123456'), 'Keir Starmer' );
INSERT INTO users (name, email, password, postcode) VALUES ('dave', 'dave@email.com', MD5('qwerty'), 'Boris Johnson');
INSERT INTO users (name, email, password, postcode) VALUES ('liz', 'liz@email.com', MD5('password'), 'Theresa May');