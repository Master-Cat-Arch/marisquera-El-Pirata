<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    // Habilitar CORS
    header('Access-Control-Allow-Origin: https://mariscoselpirata.x10.mx');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');

    header('Content-Type: application/json');

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Conexión a la base de datos
    $conexion = new mysqli('localhost', 'eicomlxp_DatosPlatillos', 'pxhkVJq57wXQqS6yr8Bb', 'eicomlxp_DatosPlatillos');
    $conexion->set_charset('utf8mb4');
    if ($conexion->connect_error) {
        echo json_encode(['error' => 'Error de conexión a la base de datos']);
        exit;
    }

    // Obtiene los parámetros de la solicitud
    $categoria = $_GET['Categoria'] ?? null;
    $tamano = $_GET['Tamaño'] ?? null;
    $platillo = $_GET['Platillo'] ?? null;

    if ($categoria) {
        $query = "SELECT * FROM MenúPlatillos WHERE Categoria = ?";
        $stmt = $conexion->prepare($query);
        $stmt->bind_param('s', $categoria);
    } elseif ($tamano) {
        $query = "SELECT * FROM MenúPlatillos WHERE Tamaño = ?";
        $stmt = $conexion->prepare($query);
        $stmt->bind_param('s', $tamano);
    } elseif ($platillo) {
        $query = "SELECT * FROM MenúPlatillos WHERE Nombre = ?";
        $stmt = $conexion->prepare($query);
        $stmt->bind_param('s', $platillo);
    } else {
        $query = "SELECT * FROM MenúPlatillos";
        $stmt = $conexion->prepare($query);
    }

    if (!$stmt->execute()) {
        echo json_encode(['error' => 'Error al ejecutar consultas']);
        exit;
    }

    $result = $stmt->get_result();

    $platillos = [];
    while ($row = $result->fetch_assoc()) {
        $platillos[] = $row;
    }

    // Verifica si no hay resultados
    if (empty($platillos)) {
        echo json_encode(['error' => 'No se encontraron platillos']);
        exit;
    }

    // Asegúrate de que siempre se envíe un JSON válido
    echo json_encode($platillos);
    ob_clean();
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Error al codificar JSON: ' . json_last_error_msg()]);
        exit;
    }
?>