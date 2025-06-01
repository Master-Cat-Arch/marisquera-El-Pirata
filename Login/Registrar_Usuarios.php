<?php
// Mostrar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Conexión a la base de datos
$conexion = new mysqli('localhost', 'eicomlxp_DatosPlatillos', 'pxhkVJq57wXQqS6yr8Bb', 'eicomlxp_DatosPlatillos');
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Procesa el formulario solo si se envió por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim($_POST['usuario']);
    $password = $_POST['password'];

// Verifica que los campos no estén vacíos
    if (empty($usuario) || empty($password)) {
        header("Location: registro.php?error=campos");
        exit;
    }

// Verifica si el usuario ya existe en la base de datos
    $check = $conexion->prepare("SELECT id FROM Usuarios WHERE usuario = ?");
    $check->bind_param('s', $usuario);
    $check->execute();
    $check->store_result();
    if ($check->num_rows > 0) {
// Si el usuario existe, redirige con error
        $check->close();
        header("Location: registro.php?error=usuario");
        exit;
    }
    $check->close();

            // Encripta la contraseña antes de guardarla
                $passwordHash = password_hash($password, PASSWORD_BCRYPT);
                $rol = 'Cliente'; // Rol por defecto

            // Inserta el nuevo usuario en la base de datos
                $stmt = $conexion->prepare("INSERT INTO Usuarios (usuario, password, rol) VALUES (?, ?, ?)");
                if (!$stmt) {
                    header("Location: registro.php?error=registro");
                    exit;
                }
                $stmt->bind_param('sss', $usuario, $passwordHash, $rol);
                if ($stmt->execute()) {
// Registro exitoso
        $stmt->close();
        header("Location: registro.php?exito=1");
        exit;
    } else {
// Error al registrar
        $stmt->close();
        header("Location: registro.php?error=registro");
        exit;
    }
}
?>