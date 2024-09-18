<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../models/actores.model.php');
error_reporting(0);
$actores = new Actores();

switch ($_GET["op"]) {
        /* case 'buscar':
        if (!isset($_POST["texto"])) {
            echo json_encode(["error" => "Actor ID not specified."]);
            exit();
        }
        $texto = intval($_POST["texto"]);
        $datos = array();
        $datos = $actores->buscar($texto);
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break; */
    case 'todos':
        $datos = array();
        $datos = $actores->todos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    case 'uno':
        if (!isset($_POST["actores_id"])) {
            echo json_encode(["error" => "Actor ID not specified."]);
            exit();
        }
        $actores_id = intval($_POST["actores_id"]);
        $datos = array();
        $datos = $actores->uno($actores_id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;

    case 'insertar':
        if (!isset($_POST["nombre"]) || !isset($_POST["apellido"]) || !isset($_POST["fecha_nacimiento"]) || !isset($_POST["nacionalidad"])) {
            echo json_encode(["error" => "Missing required parameters."]);
            exit();
        }

        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $fecha_nacimiento = $_POST["fecha_nacimiento"];
        $nacionalidad = $_POST["nacionalidad"];

        $datos = array();
        $datos = $actores->insertar($nombre, $apellido, $fecha_nacimiento, $nacionalidad);
        echo json_encode($datos);
        break;

    case 'actualizar':
        if (!isset($_POST["actores_id"]) || !isset($_POST["nombre"]) || !isset($_POST["apellido"]) || !isset($_POST["fecha_nacimiento"]) || !isset($_POST["nacionalidad"])) {
            echo json_encode(["error" => "Missing required parameters."]);
            exit();
        }

        $actores_id = intval($_POST["actores_id"]);
        $nombre = $_POST["nombre"];
        $apellido = $_POST["apellido"];
        $fecha_nacimiento = $_POST["fecha_nacimiento"];
        $nacionalidad = $_POST["nacionalidad"];

        $datos = array();
        $datos = $actores->actualizar($actores_id, $nombre, $apellido, $fecha_nacimiento, $nacionalidad);
        echo json_encode($datos);
        break;

    case 'eliminar':
        if (!isset($_POST["actores_id"])) {
            echo json_encode(["error" => "Actor ID not specified."]);
            exit();
        }
        $actores_id = intval($_POST["actores_id"]);
        $datos = array();
        $datos = $actores->eliminar($actores_id);
        echo json_encode($datos);
        break;

    default:
        echo json_encode(["error" => "Invalid operation."]);
        break;
}
