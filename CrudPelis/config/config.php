<?php
class ClaseConectar
{
    public $conexion;
    protected $db;
    private $host = "localhost";
    private $usuario = "root";
    private $pass = "";
    private $base = "peliculas";
    public function ProcedimientoParaConectar()
    {
        $this->conexion = mysqli_connect($this->host, $this->usuario, $this->pass, $this->base);
        mysqli_query($this->conexion, "SET NAMES 'utf8'");
        if ($this->conexion->connect_error) {
            die("Error al conectar con el servidor: " . $this->conexion->connect_error);
        }
        $this->db = $this->conexion;
        if ($this->db == false) die("Error al conectar con la base de datos: " . $this->conexion->connect_error);

        return $this->conexion;
    }
}

/* peliculas = pelicula_id, titulo, genero, año, director, actores_id
actores = actores_id, nombre, apellido, fecha_nacimiento, nacionalidad */