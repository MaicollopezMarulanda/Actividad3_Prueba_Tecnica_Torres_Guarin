create database if not exists usuarios;
use usuarios

CREATE TABLE usuario ( 
    id int(11) AUTO_INCREMENT NOT NULL, 
    cedula varchar (150) DEFAULT NULL,  
    nombreCompleto varchar (500) DEFAULT NULL, 
    telefono varchar (500) DEFAULT NULL, 
    direccion varchar (500) DEFAULT NULL, 
    PRIMARY KEY (id) 
);

describe usuario;

select * from usuario;

insert into usuario (cedula,nombreCompleto,telefono,direccion) values ('123','Valeria','322566','Calle:1');

