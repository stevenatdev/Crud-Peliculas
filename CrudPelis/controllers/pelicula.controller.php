<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}
include_once('../models/peliculas.model.php');
error_reporting(0);
$pelicula = new PeliculasModel();
switch ($_GET["op"]) {
    case 'todos':
        $datos = array();
        $datos = $pelicula->todos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;
    case 'actor':
        $datos = array();
        $datos = $pelicula->actor();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todosActor[] = $row;
        }
        echo json_encode($todosActor);
        break;
    case 'uno':
        if (!isset($_POST["pelicula_id"])) {
            echo json_encode(["error" => "Seleccione un pelicula"]);
        }
        $pelicula_id = $_POST["pelicula_id"];
        $datos = array();
        $datos = $pelicula->uno($pelicula_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;
    case 'insertar':
        if (!isset($_POST["titulo"]) || !isset($_POST["genero"]) || !isset($_POST["director"]) || !isset($_POST["actores_id"])) {
            echo json_encode(["error" => "Missing required parameters."]);
            exit();
        }

        $titulo = $_POST["titulo"];
        $genero = $_POST["genero"];
        $director = $_POST["director"];
        $actores_id = $_POST["actores_id"];

        $datos = array();
        $datos = $pelicula->insertar($titulo, $genero, $director, $actores_id);
        echo json_encode($datos);
        break;

    case 'actualizar':
        if (!isset($_POST["pelicula_id"]) || !isset($_POST["titulo"]) || !isset($_POST["genero"]) || !isset($_POST["director"]) || !isset($_POST["actores_id"])) {
            echo json_encode(["error" => "Missing required parameters."]);
            exit();
        }

        $pelicula_id = intval($_POST["pelicula_id"]);
        $titulo = $_POST["titulo"];
        $genero = $_POST["genero"];
        $director = $_POST["director"];
        $actores_id = $_POST["actores_id"];

        $datos = array();
        $datos = $pelicula->actualizar($pelicula_id, $titulo, $genero, $director, $actores_id);
        echo json_encode($datos);
        break;

    case 'eliminar':
        if (!isset($_POST["pelicula_id"])) {
            echo json_encode(["error" => "User ID not specified."]);
            exit();
        }
        $pelicula_id = intval($_POST["pelicula_id"]);
        $datos = array();
        $datos = $pelicula->eliminar($pelicula_id);
        echo json_encode($datos);
        break;
}
