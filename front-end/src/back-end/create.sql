CREATE DATABASE CRYPTOP;

USE CRYPTOP;

CREATE TABLE USUARIOS
(
ID INT NOT NULL AUTO_INCREMENT,
NOME varchar(96) NOT NULL,
EMAIL varchar(96),
SENHA varchar(96),
PRIMARY KEY (ID)
)

select * from usuarios;