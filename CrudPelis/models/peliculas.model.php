<?php
include_once('../config/config.php');

class PeliculasModel
{
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT peliculas.*, actores.nombre as actor, actores.apellido as apellidos FROM peliculas INNER JOIN actores ON actores.actores_id = peliculas.actores_id";
        $datos = mysqli_query($con, $cadena);
        return $datos;
        $con->close();
    }
    public function actor()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT actores.nombre as actor, actores.apellido as apellidos, actores.actores_id FROM actores";
        $datos = mysqli_query($con, $cadena);
        return $datos;
        $con->close();
    }
    public function uno($pelicula_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT * FROM peliculas WHERE pelicula_id = $pelicula_id";
        $datos = mysqli_query($con, $cadena);
        return $datos;
        $con->close();
    }
    public function insertar($titulo, $genero, $director, $actores_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "INSERT INTO peliculas (titulo, genero, director, actores_id) VALUES ('$titulo', '$genero', '$director', $actores_id)";
        $datos = mysqli_query($con, $cadena);
        return $datos;
        $con->close();
    }
    public function actualizar($pelicula_id, $titulo, $genero, $director, $actores_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "UPDATE peliculas SET titulo = '$titulo', genero = '$genero', director = '$director', actores_id = $actores_id WHERE pelicula_id = $pelicula_id";
        $datos = mysqli_query($con, $cadena);
        return $datos;
        $con->close();
    }
    public function eliminar($pelicula_id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "DELETE FROM peliculas WHERE pelicula_id = $pelicula_id";
        $datos = mysqli_query($con, $cadena);
        return $datos;
        $con->close();
    }
}
