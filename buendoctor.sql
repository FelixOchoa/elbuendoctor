-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2021 a las 17:16:17
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `buendoctor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `cod_cita` int(11) NOT NULL,
  `cod_paciente` int(11) NOT NULL,
  `estado_cita` enum('atendido','no atendido','asignado','anulado','en servicio') DEFAULT NULL,
  `fecha_cita` date DEFAULT NULL,
  `un_doctor` varchar(20) NOT NULL,
  `observacion` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`cod_cita`, `cod_paciente`, `estado_cita`, `fecha_cita`, `un_doctor`, `observacion`) VALUES
(3, 1, 'en servicio', '2021-05-07', 'smurphy', 'Esta es una observacion'),
(5, 2, NULL, '2021-05-08', 'aochoa', 'Esta es una observación v2'),
(6, 4, 'atendido', '2021-05-10', 'smurphy', NULL),
(7, 5, 'asignado', '2021-05-13', 'alopez', 'Esta es la observacion mas pendeja');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `cod_paciente` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `foto` varchar(1000) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `edad` int(11) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `barrio` varchar(20) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `ciudad` varchar(20) NOT NULL,
  `estado` enum('activo','inactivo') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`cod_paciente`, `nombre`, `apellido`, `foto`, `fecha_nacimiento`, `edad`, `direccion`, `barrio`, `telefono`, `ciudad`, `estado`) VALUES
(1, 'Michael', 'Jackson', 'http://latinoevolution.com/wp-content/uploads/2015/12/portada3-810x405.jpg', '1958-08-29', 61, 'Por ahi', 'Las Marias', '4020105030', 'Indiana', 'activo'),
(2, 'Edilson', 'Ochoa', 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.6435-9/181472142_171435328199597_549835370664029670_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=DGRpBDAjCfoAX_nOhTZ&_nc_ht=scontent.fbaq1-1.fna&oh=09e06aec6bc99db22aaa691ec271fd6c&oe=60B54B61', '1969-01-21', 52, 'Mz 21 Casa 8', 'Villamirriam', '3223111283', 'Valencia', 'activo'),
(4, 'Miguel', 'Castro', 'https://scontent.fctg2-1.fna.fbcdn.net/v/t1.6435-9/166857329_10221978442983917_5197504151654255894_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFkm56lG8zWBjv8ZRveslqf3Qm6DB3yVcbdCboMHfJVxin66ZcU5JhuUUi6zZdXb9_TBB2gMII9OxiJCjER5FaX&_nc_ohc=RImIKxmUPDYAX_CXq7E&_nc_ht=scontent.fctg2-1.fna&oh=c9f29e41ed6f9589cd54860744d67308&oe=60AE7DE6', '2021-05-08', 1, 'Mz 21 casa 8', 'Villamirian ', '3043673388', 'Valledupar', 'activo'),
(5, 'Diego', 'Granados Cañate', 'https://www.famousbirthdays.com/faces/granados-diego-image.jpg', '2001-06-22', 19, 'Porahi', 'Mandala', '3512423310', 'Valledupar', 'activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `codigo` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `foto` varchar(1000) NOT NULL,
  `tipo_usuario` enum('administrador','medico','fisioterapeuta','enfermero') NOT NULL,
  `estado` enum('activo','inactivo') NOT NULL,
  `trabajando` enum('en servicio','libre') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`codigo`, `username`, `password`, `nombre`, `apellido`, `foto`, `tipo_usuario`, `estado`, `trabajando`) VALUES
(1, 'Fexco', '123', 'Felixiano', 'Ochoa', 'https://scontent.fctg2-1.fna.fbcdn.net/v/t1.6435-9/166510906_469646104386360_7419897754103018487_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHX5y_Lyj98gjTHncEDo0-XeV31kKHv8L15XfWQoe_wvcoyQvZiGn1ic1OFIzaWeDSWcbuQRjSiAwKBrvHl6pel&_nc_ohc=XKzHWYqkYJsAX_AcekL&_nc_ht=scontent.fctg2-1.fna&oh=43eb33eff0aa67a5fd85cc788b04d0fa&oe=60AFAC06', 'administrador', 'activo', 'libre'),
(2, 'smurphy', '123', 'Shaun', 'Murphy', 'https://depor.com/resizer/aKx0giAn9K7Hyz75tibNKqJjFMI=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/B2PLGLNAY5GNPKR6KJLXR5G5BQ.jpg', 'medico', 'activo', 'en servicio'),
(3, 'scamacho', '123', 'Sebastian', 'Camacho', 'https://scontent.fctg2-1.fna.fbcdn.net/v/t1.6435-9/166857329_10221978442983917_5197504151654255894_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFkm56lG8zWBjv8ZRveslqf3Qm6DB3yVcbdCboMHfJVxin66ZcU5JhuUUi6zZdXb9_TBB2gMII9OxiJCjER5FaX&_nc_ohc=RImIKxmUPDYAX_CXq7E&_nc_ht=scontent.fctg2-1.fna&oh=c9f29e41ed6f9589cd54860744d67308&oe=60AE7DE6', 'administrador', 'activo', 'en servicio'),
(17, 'ghouse', '123', 'Gregory', 'House', 'https://sire-media-foxes.fichub.com/generic/serie-main/827.1024x576.jpg', 'medico', 'inactivo', 'en servicio'),
(19, 'aochoa', '123', 'Adriana', 'Ochoa', 'https://scontent.fbga3-1.fna.fbcdn.net/v/t1.6435-9/131258433_10224424292259322_5853562426817586184_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEUA6Gljn4_UgnH8k58Ll-OlDsB3B8fknGUOwHcHx-ScaWTff94sTgbVvvtjET_vr2TFZ5mtgdiUjLmwSDRFL3Z&_nc_ohc=yS69XflGuBwAX9iCNll&_nc_oc=AQlQfezdk7P0JznOQ6x-Ji9QBdf1MPaEKkRjpMepKPq47aa6l4PandhMAspACUzpGnA&_nc_ht=scontent.fbga3-1.fna&oh=df21b1406d4f15072f4751919655141c&oe=60B031DE', 'enfermero', 'activo', 'libre'),
(33, 'sishigami', '123', 'Senku-chan', 'Ishigami', 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2021/01/Dr.-Stone-celebra-el-cumpleanos-de-Senku-Ishigami.jpg?fit=1280%2C720&ssl=1', 'medico', 'inactivo', 'en servicio'),
(34, 'alopez', '123', 'Miguel', 'Quiñones', 'https://upload.wikimedia.org/wikipedia/commons/0/04/Alfonso_Lopez_Pumarejo.jpg', 'medico', 'activo', 'en servicio');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`cod_cita`),
  ADD UNIQUE KEY `fecha_cita` (`fecha_cita`),
  ADD KEY `cod_paciente` (`cod_paciente`),
  ADD KEY `citas_ibfk_1` (`un_doctor`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`cod_paciente`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `cod_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `cod_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `citas_ibfk_1` FOREIGN KEY (`un_doctor`) REFERENCES `user` (`username`),
  ADD CONSTRAINT `citas_ibfk_2` FOREIGN KEY (`cod_paciente`) REFERENCES `paciente` (`cod_paciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
