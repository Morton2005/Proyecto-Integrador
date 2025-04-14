use milo;
CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email Varchar(100) NOT NULL UNIQUE,
contrasenia VARCHAR (255) NOT NULL,
fecha_nacimiento DATE NOT NULL,
dni INT NOT NULL UNIQUE,
foto_perfil VARCHAR(255),
createAt timestamp DEFAULT current_timestamp,
updateAt timestamp Default current_timestamp on update current_timestamp,
deleteAt timestamp NULL ON UPDATE current_timestamp

);

CREATE table productos (
id INT unsigned primary KEY AUTO_INCREMENT,
foto_Producto varchar(255),
nombre_producto text not null ,
descripcion_Producto text not null , 
id_usuario INT UNSIGNED not null,
createAt timestamp DEFAULT current_timestamp,
updateAt timestamp Default current_timestamp on update current_timestamp,
deleteAt timestamp NULL ON UPDATE current_timestamp,
foreign key (id_usuario) REFERENCES usuarios (id)
);
CREATE table comentarios(
id INT UNSIGNED PRIMARY KEY auto_increment,
texto VARCHAR (100)not NULL,
id_productos INT UNSIGNED  Not NULL, 
id_usuarios INT UNSIGNED NOT NULL,
createAt timestamp DEFAULT current_timestamp,
updateAt timestamp Default current_timestamp on update current_timestamp,
deleteAt timestamp NULL ON UPDATE current_timestamp
) ;

INSERT INTO usuarios (email, contrasenia, fecha_nacimiento, dni, foto_perfil) VALUES
('usuario1@example.com', 'contraseña1', '1990-01-01', 12345678, 'foto1.jpg'),
('usuario2@example.com', 'contraseña2', '1985-03-15', 23456789, 'foto2.jpg'),
('usuario3@example.com', 'contraseña3', '1992-07-30', 34567890, 'foto3.jpg'),
('usuario4@example.com', 'contraseña4', '1995-11-25', 45678901, 'foto4.jpg'),
('usuario5@example.com', 'contraseña5', '1988-05-10', 56789012, 'foto5.jpg');


INSERT INTO productos (id_usuario, foto_Producto, nombre_producto, descripcion_producto) VALUES
(1, 'producto1.jpg', 'Producto 1', 'Descripción del Producto 1'),
(1, 'producto2.jpg', 'Producto 2', 'Descripción del Producto 2'),
(2, 'producto3.jpg', 'Producto 3', 'Descripción del Producto 3'),
(3, 'producto4.jpg', 'Producto 4', 'Descripción del Producto 4'),
(3, 'producto5.jpg', 'Producto 5', 'Descripción del Producto 5'),
(4, 'producto6.jpg', 'Producto 6', 'Descripción del Producto 6'),
(4, 'producto7.jpg', 'Producto 7', 'Descripción del Producto 7'),
(5, 'producto8.jpg', 'Producto 8', 'Descripción del Producto 8'),
(5, 'producto9.jpg', 'Producto 9', 'Descripción del Producto 9'),
(2, 'producto10.jpg', 'Producto 10', 'Descripción del Producto 10');


INSERT INTO comentarios (id_productos, id_usuarios, texto) VALUES
(1, 1, 'Comentario 1 sobre el Producto 1'),
(1, 2, 'Comentario 2 sobre el Producto 1'),
(1, 3, 'Comentario 3 sobre el Producto 1');


INSERT INTO comentarios (id_productos, id_usuarios, texto) VALUES
(2, 4, 'Comentario 1 sobre el Producto 2'),
(2, 5, 'Comentario 2 sobre el Producto 2'),
(2, 3, 'Comentario 3 sobre el Producto 2');


INSERT INTO comentarios (id_productos, id_usuarios, texto) VALUES
(3, 2, 'Comentario 1 sobre el Producto 3'),
(3, 1, 'Comentario 2 sobre el Producto 3'),
(3, 4, 'Comentario 3 sobre el Producto 3');


INSERT INTO comentarios (id_productos, id_usuarios, texto) VALUES
(4, 5, 'Comentario 1 sobre el Producto 4'),
(4, 2, 'Comentario 2 sobre el Producto 4'),
(4, 3, 'Comentario 3 sobre el Producto 4');


INSERT INTO comentarios (id_productos, id_usuarios, texto) VALUES
(5, 1, 'Comentario 1 sobre el Producto 5'),
(5, 4, 'Comentario 2 sobre el Producto 5'),
(5, 2, 'Comentario 3 sobre el Producto 5');

.
...
