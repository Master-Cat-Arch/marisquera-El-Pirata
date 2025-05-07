<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

$conexion = new mysqli('localhost', 'eicomlxp_DatosPlatillos', 'pxhkVJq57wXQqS6yr8Bb', 'eicomlxp_DatosPlatillos');
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    $stmt = $conexion->prepare("SELECT id, password, rol FROM Usuarios WHERE usuario = ?");
    if (!$stmt) {
        die("Error en la preparación de la consulta: " . $conexion->error);
    }

    $stmt->bind_param('s', $usuario);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Establecer sesión
            $_SESSION['usuario'] = $usuario;
            $_SESSION['rol'] = $user['rol']; // CLIENTE o ADMIN
            header('Location: ../index.html'); // Redirige a la página principal
            exit;
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }
}
?>