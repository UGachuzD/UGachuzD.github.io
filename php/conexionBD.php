<?php
    $conexion = mysqli_connect("127.0.0.1:3305", "root", "", "pidae2");
    if ($conexion->connect_error) {
        die("Conexión fallida: " . $conexion->connect_error);
    }else{
        echo "Conexión exitosa";
    }
?>