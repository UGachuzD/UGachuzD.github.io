<?php 

$conn = include("conexionBD.php");
$sql = "SELECT * FROM actdescarga";
$resultado = mysqli_query($conexion, $sql);
if($resultado){
    while($row = mysqli_fetch_array($resultado)){
        echo "<option value='".$row['idact']."' >".$row['idact']." - ".$row['descripcion']."</option>";

    }
}else{
    echo "Error en la consulta: " . mysqli_error($conexion);
}

?>