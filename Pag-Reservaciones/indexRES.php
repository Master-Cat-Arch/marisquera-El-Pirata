<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
        // Conexión a la base de datos
        $conexion = new mysqli('localhost', 'eicomlxp_DatosPlatillos', 'pxhkVJq57wXQqS6yr8Bb', 'eicomlxp_DatosPlatillos');
        $conexion->set_charset('utf8mb4');
            if ($conexion->connect_error) {
                echo json_encode(['error' => 'Error de conexión a la base de datos :v']);
                exit;
            }

        // Verificar conexión
        if ($conexion->connect_error) {
            die("Error de conexión: " . $conexión->connect_error);
        }

        // Capturar datos del formulario
        $nombre = $_POST['Nombre'] ?? '';
        $email = $_POST['Correo'] ?? '';
        $telefono1 = $_POST['Telefono1'] ?? '';
        $telefono2 = $_POST['Telefono2'] ?? '';
        $fecha = $_POST['Fecha'] ?? '';
        $detalles = $_POST['Detalles'] ?? '';

        // Validar longitud de los números de teléfono
        if (strlen($telefono1) > 15 || strlen($telefono2) > 15) {
            die("El número de teléfono no puede exceder los 15 caracteres.");
        }

        /* Validar datos extra (opcional)
        if (empty($nombre) || empty($telefono1) || empty($fecha) || empty($detalles)) {
            die("Por favor, llena todos los campos.");
        }*/

        // Insertar datos en la base de datos
        $stmt = $conexion->prepare("INSERT INTO Reservaciones (Nombre, Correo, Telefono1, Telefono2, Fecha, Detalles) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $nombre, $email, $telefono1, $telefono2, $fecha, $detalles);

        if ($stmt->execute()) {
            echo "Datos guardados correctamente.";
        } else {
            echo "Error al guardar los datos: " . $stmt->error;
        }

        $stmt->close();
        $conexion->close();
?>