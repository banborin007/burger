DROP DATABASE IF EXISTS burgers_db;
-- Create a burger database

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOL DEFAULT true,
    primary key (id)
);