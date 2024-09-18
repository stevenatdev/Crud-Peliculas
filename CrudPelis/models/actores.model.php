<?php
require_once('../config/config.php');

class Actores
{
    /* public function buscar($texto)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT * FROM `actores` where nombre='$texto'";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    } */
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT * FROM `actores`";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    public function uno($actores_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT * FROM `actores` WHERE `actores_id` = $actores_id";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    public function insertar($nombre, $apellido, $fecha_nacimiento, $nacionalidad)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoParaConectar();
            $cadena = "INSERT INTO `actores`(`nombre`, `apellido`, `fecha_nacimiento`, `nacionalidad`) 
                       VALUES ('$nombre', '$apellido', '$fecha_nacimiento', '$nacionalidad')";
            if (mysqli_query($con, $cadena)) {
                return $con->insert_id;
            } else {
                return $con->error;
            }
        } catch (Exception $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function actualizar($actores_id, $nombre, $apellido, $fecha_nacimiento, $nacionalidad)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoParaConectar();
            $cadena = "UPDATE `actores` SET 
                       `nombre`='$nombre',
                       `apellido`='$apellido',
                       `fecha_nacimiento`='$fecha_nacimiento',
                       `nacionalidad`='$nacionalidad'
                       WHERE `actores_id` = $actores_id";
            if (mysqli_query($con, $cadena)) {
                return $actores_id;
            } else {
                return $con->error;
            }
        } catch (Exception $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function eliminar($actores_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "DELETE FROM actores WHERE actores_id = $actores_id";
        $datos = mysqli_query($con, $cadena);
        return $datos;
        $con->close();
    }
}
