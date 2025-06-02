<?php
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

        // Conexión a la base de datos
        $conexion = new mysqli('localhost', 'eicomlxp_DatosPlatillos', 'pxhkVJq57wXQqS6yr8Bb', 'eicomlxp_DatosPlatillos');
        $conexion->set_charset('utf8mb4');

            if ($conexion->connect_error) {
                echo json_encode(['error' => 'Error de conexión a la base de datos :v']);
                exit;
            }
        // Verificar conexión
        if ($conexion->connect_error) {
            die("Error de conexión a la DB: " . $conexión->connect_error);
        }
//Recuperar datos de la base de datos
$sql = "SELECT * FROM tu_tabla";
$result = $conn->query($sql);

// Crear un array para almacenar los datos
$datos = array();

// Recorrer los resultados y agregarlos al array
while($row = $result->fetch_assoc()) {
    $datos[] = $row;
}

// Convertir el array a formato JSON
$json = json_encode($datos);

// Imprimir el JSON
echo $json;

// Cerrar conexión
$conn->close();
?>



// Leer datos de la solicitud
    $nombre = $_GET['Nombre'];
    $email = $_GET['Correo'];
    $telefono1 = $_GET['Telefono1'];
    $telefono2 = $_GET['Telefono2'];
    $fecha = $_GET['Fecha'];
    $detalles = $_GET['Detalles'];
    $nombre_usuario = $_GET['Usuario'];

// Cerrar conexión
$conn->close();