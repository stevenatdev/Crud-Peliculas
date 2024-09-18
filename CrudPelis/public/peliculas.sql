-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-09-2024 a las 18:53:15
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `peliculas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actores`
--

CREATE TABLE `actores` (
  `actores_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `nacionalidad` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actores`
--

INSERT INTO `actores` (`actores_id`, `nombre`, `apellido`, `fecha_nacimiento`, `nacionalidad`) VALUES
(1, 'MIA', 'KHALIFA', '2014-02-21', 'LIBANESA EEUU'),
(3, 'Pablo', 'Escobar', '2024-09-04', 'Colombiana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `pelicula_id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `anio` date DEFAULT curdate(),
  `director` varchar(100) NOT NULL,
  `actores_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`pelicula_id`, `titulo`, `genero`, `anio`, `director`, `actores_id`) VALUES
(1, 'UNA VISITA INESPERABLE', 'ADULTOS', '2024-09-16', 'NINGUNO', 1),
(6, 'Hola', 'ADULTOS', '2024-09-18', 'NINGUNO', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actores`
--
ALTER TABLE `actores`
  ADD PRIMARY KEY (`actores_id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`pelicula_id`),
  ADD KEY `fk_actores_peliculas` (`actores_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actores`
--
ALTER TABLE `actores`
  MODIFY `actores_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `pelicula_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `fk_actores_peliculas` FOREIGN KEY (`actores_id`) REFERENCES `actores` (`actores_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
