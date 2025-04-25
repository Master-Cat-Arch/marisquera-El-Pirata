<?php
header('Content-Type: application/json');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Conexión a la base de datos
$conexion = new mysqli('localhost', 'root', '', 'DatosPlatillos');
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
    echo json_encode(['error' => 'Error al ejecutar la consulta']);
    exit;
}

$result = $stmt->get_result();

$platillos = [];
while ($row = $result->fetch_assoc()) {
    $platillos[] = $row;
}
// Asegúrate de que siempre se envíe un JSON válido
echo json_encode($platillos);
$stmt->close();
$conexion->close();

// Obtiene la categoría de la solicitud
/*
$categoria = $_GET['Categoria'] ?? 'Todos';
if ($categoria === 'Todos') {
    $query = "SELECT * FROM MenúPlatillos";
} else {
    $query = "SELECT * FROM MenúPlatillos WHERE Categoria = ?";
}
$stmt = $conexion->prepare($query);
if ($categoria !== 'Todos') {
    $stmt->bind_param('s', $categoria);
}
if (!$stmt->execute()) {
    echo json_encode(['error' => 'Error al ejecutar la consulta']);
    exit;
}*/
?>