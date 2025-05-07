<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$conexion = new mysqli('localhost', 'eicomlxp_DatosPlatillos', 'pxhkVJq57wXQqS6yr8Bb', 'eicomlxp_DatosPlatillos');
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Encripta la contraseña
    $rol = 'Cliente'; // Por defecto, el rol será Cliente

    $stmt = $conexion->prepare("INSERT INTO Usuarios (usuario, password, rol) VALUES (?, ?, ?)");
    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param('sss', $usuario, $password, $rol);
    if ($stmt->execute()) {
        echo "Usuario registrado con éxito.";
    } else {
        echo "Error al registrar usuario: " . $stmt->error;
    }
}
?>