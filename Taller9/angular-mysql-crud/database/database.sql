CREATE DATABASE ng_formulario_db;
USE ng_formulario_db;

CREATE TABLE tipoDocumento(
    id_tipo_documento INTEGER (4) NOT NULL,
    nombre VARCHAR (20),
    descripcion VARCHAR(25),
    PRIMARY KEY (id_tipo_documento)
);

CREATE TABLE residencia(
    id_residencia INTEGER (3) NOT NULL,
    nombre VARCHAR (20),
    descripcion VARCHAR (25),
    PRIMARY KEY (id_residencia)
);

CREATE TABLE formulario(
    id INTEGER (11) AUTO_INCREMENT NOT NULL,
    nombres VARCHAR(35),
    apellidos VARCHAR(35),
    id_tipo_documento INTEGER (1),
    documento INTEGER (10),
    lugar_residencia INTEGER (3),
    fecha_nacimiento DATE,
    email VARCHAR(60),
    telefono VARCHAR(10),
    usuario VARCHAR (15),
    contraseña VARCHAR(15),
    PRIMARY KEY (id),
    FOREIGN KEY (id_tipo_documento) REFERENCES tipoDocumento(id_tipo_documento),
    FOREIGN KEY (lugar_residencia) REFERENCES residencia(id_residencia)
);

DESCRIBE formulario;
DESCRIBE residencia;
DESCRIBE tipoDocumento;
