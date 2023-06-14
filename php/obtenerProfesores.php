<?php 

    $conn = include("conexionBD.php");
    $sql = "SELECT * FROM profesor";
    $resultado = mysqli_query($conexion, $sql);
    if($resultado){
        while($row = mysqli_fetch_array($resultado)){
            echo "
            <tr>
                <td>".$row['id']."</td>
                <td>".$row['nombre']."</td>
                <td>".$row['primerApe']."</td>
                <td>".$row['segundoApe']."</td>
                <td>".$row['depto']."</td>
                <td>".$row['correo']."</td>
                <td>".$row['contrasena']."</td>
                <td>".$row['contesto']."</td>
            </tr>
            ";
        }
    }
?>