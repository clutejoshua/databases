CREATE DATABASE chat;

USE chat;

CREATE TABLE username (
  usernameID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (usernameID)
);
CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  messages VARCHAR(140) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES username(usernameID)
);


/* Create other tables and define schemas for them here! *

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

