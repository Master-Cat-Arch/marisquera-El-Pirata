<?php
// Mostrar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Iniciar sesión para guardar datos del usuario si el login es exitoso
session_start();

// Conexión a la base de datos
$conexion = new mysqli('localhost', 'eicomlxp_DatosPlatillos', 'pxhkVJq57wXQqS6yr8Bb', 'eicomlxp_DatosPlatillos');
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Verifica que el formulario se haya enviado por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim($_POST['usuario']);
    $password = $_POST['password'];

            // Si algún campo está vacío, redirige con error
                if (empty($usuario) || empty($password)) {
                    header("Location: index__login.php?error=campos");
                    exit;
                }

// Prepara la consulta para buscar el usuario
    $stmt = $conexion->prepare("SELECT id, password, rol FROM Usuarios WHERE usuario = ?");
    if (!$stmt) {
        header("Location: index__login.php?error=servidor");
        exit;
    }

// Asocia el parámetro y ejecuta la consulta
    $stmt->bind_param('s', $usuario);
    $stmt->execute();
    $result = $stmt->get_result();

// Si el usuario existe
    if ($result && $result->num_rows === 1) {
        $user = $result->fetch_assoc();

// Verifica la contraseña usando password_verify
        if (password_verify($password, $user['password'])) {

// Guarda datos en la sesión y redirige al inicio
            $_SESSION['usuario'] = $usuario;
            $_SESSION['rol'] = $user['rol'];
            $stmt->close();
            header('Location: ../index.php');
            exit;
        } else {

// Contraseña incorrecta
            $stmt->close();
            header("Location: index__login.php?error=contraseña_incorrecta");
            exit;
        }
    } else {
// Usuario no encontrado
        if ($stmt) $stmt->close();
        header("Location: index__login.php?error=usuario_no_encontrado");
        exit;
    }
}
?>