<?php 

    $conn = include("conexionBD.php");
    $sql = "SELECT carreras.siglas, carreras.plan, materia.nombre FROM carreras INNER JOIN materia ON carreras.id=materia.carrera";
    $resultado = mysqli_query($conexion, $sql);
    if($resultado){
        while($row = mysqli_fetch_array($resultado)){
            echo "<option value='".$row['nombre']."'>".$row['siglas']." ".$row['plan']." - ".$row['nombre']."</option>";

        }
    }
?>