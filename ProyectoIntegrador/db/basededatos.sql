CREATE SCHEMA IF NOT EXISTS milo;
USE milo;

DROP TABLE IF EXISTS comentarios;
DROP TABLE IF EXISTS productos;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dni INT NOT NULL UNIQUE,
    foto_perfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    foto_Producto VARCHAR(255),
    nombre_producto TEXT NOT NULL,
    descripcion_Producto TEXT NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(100) NOT NULL,
    id_productos INT UNSIGNED NOT NULL,
    id_usuarios INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id_productos) REFERENCES productos(id),
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
);

INSERT INTO usuarios (username,email, contrasenia, fecha_nacimiento, dni, foto_perfil) VALUES
('username1','usuario1@example.com', 'contraseña1', '1990-01-01', 12345678, 'foto1.jpg'),
('usernam2e','usuario2@example.com', 'contraseña2', '1985-03-15', 23456789, 'foto2.jpg'),
('usernam3e','usuario3@example.com', 'contraseña3', '1992-07-30', 34567890, 'foto3.jpg'),
('usernam4e','usuario4@example.com', 'contraseña4', '1995-11-25', 45678901, 'foto4.jpg'),
('usernam5e','usuario5@example.com', 'contraseña5', '1988-05-10', 56789012, 'foto5.jpg');

INSERT INTO productos (id_usuario, foto_Producto, nombre_producto, descripcion_Producto) VALUES
(1, 'reloj1.webp', 'Reloj Trump', 'Elegancia imponente con el sello de poder.'),
(1, 'reloj2.jpeg', 'Reloj Biden', 'Estilo clásico para liderar con calma.'),
(2, 'reloj3.webp', 'Reloj Milei', 'Diseño disruptivo que rompe moldes.'),
(3, 'reloj4.webp', 'Reloj Colapinto', 'Precisión y velocidad en cada segundo.'),
(3, 'reloj5.jpeg', 'Reloj DJ', 'Ritmo, brillo y estilo en tu muñeca.'),
(4, 'reloj6.jpeg', 'Reloj Milo', 'Minimalismo moderno y auténtico.'),
(4, 'reloj7.jpeg', 'Reloj Shakira', 'Brilla con ritmo y elegancia latina.'),
(5, 'reloj8.webp', 'Reloj Morton', 'Tecnología y diseño en perfecta armonía.'),
(5, 'reloj9.jpeg', 'Reloj Messi', 'Grandeza silenciosa con alma ganadora.'),
(2, 'reloj10.jpeg', 'Reloj Ronaldo', 'Fuerza, lujo y precisión sin igual.');


INSERT INTO comentarios (id_productos, id_usuarios, texto) VALUES
(1, 1, 'Comentario 1 sobre el Producto 1'),
(1, 2, 'Comentario 2 sobre el Producto 1'),
(1, 3, 'Comentario 3 sobre el Producto 1'),
(2, 4, 'Comentario 1 sobre el Producto 2'),
(2, 5, 'Comentario 2 sobre el Producto 2'),
(2, 3, 'Comentario 3 sobre el Producto 2'),
(3, 2, 'Comentario 1 sobre el Producto 3'),
(3, 1, 'Comentario 2 sobre el Producto 3'),
(3, 4, 'Comentario 3 sobre el Producto 3'),
(4, 5, 'Comentario 1 sobre el Producto 4'),
(4, 2, 'Comentario 2 sobre el Producto 4'),
(4, 3, 'Comentario 3 sobre el Producto 4'),
(5, 1, 'Comentario 1 sobre el Producto 5'),
(5, 4, 'Comentario 2 sobre el Producto 5'),
(5, 2, 'Comentario 3 sobre el Producto 5');
