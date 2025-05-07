<?php
// filepath: /media/not2/GROVERMEK/marisquera-El-Pirata/Login/logout.php
session_start();
session_destroy();
header('Location: ../index.html');
exit;
?>