CREATE DATABASE chat;

USE chat;

CREATE TABLE username (
  usernameID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (usernameID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  messages VARCHAR(140),
  FOREIGN KEY (messages) REFERENCES username(usernameID)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

