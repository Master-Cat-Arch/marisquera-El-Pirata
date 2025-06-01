<?php
session_start();    //inica la sesiòn
session_destroy(); // Destruye la sesión para cerrar sesión
header('Location: ../index.php');
exit;
?>