CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  uid int(11) NOT NULL auto_increment,
  username varchar(10),
  PRIMARY KEY (uid)
);

CREATE TABLE messages (
  mid int(11) NOT NULL auto_increment,
  message text(20),
  uid int(11),
  PRIMARY KEY (mid)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* select users.name, users.uid, messages.uid, messages.message
 * from users, messages
 * where users.uid = messages.uid;



