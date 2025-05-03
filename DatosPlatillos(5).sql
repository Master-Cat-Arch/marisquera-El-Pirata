-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 03-05-2025 a las 04:32:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `DatosPlatillos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `MenúPlatillos`
--

CREATE TABLE `MenúPlatillos` (
  `IDPlatillo` int(11) NOT NULL,
  `Img` text NOT NULL,
  `Nombre` text NOT NULL,
  `Categoria` text NOT NULL,
  `Estrellas` int(11) NOT NULL,
  `Precio` int(11) NOT NULL,
  `Tamaño` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `MenúPlatillos`
--

INSERT INTO `MenúPlatillos` (`IDPlatillo`, `Img`, `Nombre`, `Categoria`, `Estrellas`, `Precio`, `Tamaño`) VALUES
(100, 'img_ceviche.jpg', 'Ceviche', 'Ceviche', 5, 0, 'Normal'),
(101, 'img_tost-ceviche.jpg', 'Tostadas de Ceviche', 'Tostadas', 4, 55, 'Normal'),
(102, 'img_tost-ceviche-guisado.webp', 'Tostadas de Ceviche Guisado', 'Tostadas', 4, 55, 'Normal'),
(103, 'img_tost-ceviche-camaron.jpg', 'Tostadas de Camaron', 'Tostadas', 3, 105, 'Normal'),
(104, 'img_tost-ceviche-calamar.jpeg', 'Tostadas de Calamar', 'Tostadas', 4, 105, 'Normal'),
(105, 'img_tost-ceviche-mixta.jpeg', 'Tostadas Mixtas', 'Tostadas', 3, 105, 'Normal'),
(201, 'img_cam-cal-ost.jpg', 'Camaron,Calamar y Ostion', 'Cocteles', 4, 145, 'Chico'),
(202, 'img_cam-cal-ost.jpg', 'Camaron,Calamar y Ostion', 'Cocteles', 3, 160, 'Mediano'),
(203, 'img_cam-cal-ost.jpg', 'Camaron,Calamar y Ostion', 'Cocteles', 4, 175, 'Chavela (Grande)'),
(301, 'img_ceviche-camaron.jpg', 'Convinacion de Ceviche y Camaron', 'Botanas', 5, 220, 'Chico-Mediano-Grande'),
(401, 'img_balitas.png', 'Balitas', 'Balitas', 4, 30, 'Chico'),
(402, 'img_balitas.png', 'Balitas', 'Balitas', 4, 60, 'Mediano'),
(403, 'img_balitas.png', 'Balitas', 'Balitas', 4, 80, 'Grande'),
(501, 'img_f.c.enpanizado.jpg', 'F.C. Enpanizados', 'F.C.', 5, 250, 'Normal'),
(502, 'img-leo2.jpg', 'F.C. al Mojo de Ajo', 'F.C.', 3, 250, 'Normal'),
(503, 'img-leo2.jpg', 'F.C. a la Diabla', 'F.C.', 4, 250, 'Normal'),
(504, 'img-leo2.jpg', 'F.C. a la Veracruzana', 'F.C.', 4, 250, 'Normal'),
(601, 'img_caldo-camaron.png', 'Caldo de Camaron', 'Otros', 4, 150, 'Normal'),
(602, 'img_nuggets.jpg', 'Nuggets', 'Otros', 5, 90, 'Normal'),
(603, 'img_papas-francesa.jpg', 'Papas a la Francesa', 'Otros', 5, 70, 'Normal'),
(604, 'img_dedos-queso.webp', 'Deditos de Queso', 'Otros', 3, 70, 'Normal'),
(605, 'img_ostiones.png', 'Ostiones', 'Otros', 0, 0, 'Normal'),
(606, 'img_carpa.jpg', 'Carpa', 'Otros', 0, 0, 'Normal'),
(701, 'img_cocacola.webp', 'CocaCola', 'Bebidas', 5, 30, '500ml'),
(702, 'img_fresca.jpg', 'Fresca', 'Bebidas', 4, 30, '500ml'),
(703, 'img_fanta.jpg', 'Fanta', 'Bebidas', 4, 30, '500ml'),
(704, 'img_cerveza-corona.jpg', 'Cerveza Corona', 'Bebidas', 5, 35, '335ml'),
(705, 'img_cidral-mundent.jpg', 'Cidral Mundent', 'Bebidas', 4, 30, '500ml'),
(801, 'img_michelada.jpg', 'Micheladas', 'Micheladas', 5, 90, '350ml');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `MenúPlatillos`
--
ALTER TABLE `MenúPlatillos`
  ADD PRIMARY KEY (`IDPlatillo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
