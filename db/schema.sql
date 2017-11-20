-- Create the database burgers_db and specify it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table wishes.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(20) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
