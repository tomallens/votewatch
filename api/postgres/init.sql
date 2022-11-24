CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password CHAR(32) NOT NULL,
  postcode VARCHAR(10) NOT NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO users (name, email, password, postcode) VALUES ('liz', 'liz@email.com', MD5('123456'), 'N7 7AJ' );
INSERT INTO users (name, email, password, postcode) VALUES ('boris', 'dave@email.com', MD5('qwerty'), 'NE1 4ST');
INSERT INTO users (name, email, password, postcode) VALUES ('theresa', 'steve@email.com', MD5('password'), 'M11 3FF');