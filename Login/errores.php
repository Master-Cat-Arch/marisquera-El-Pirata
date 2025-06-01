
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registro de Usuario</title>
        <link rel="icon" href="../Img/icono.jpg">
        <link rel="stylesheet" href="style__login.css">
</head>
<body>
    <div class="container-login">
        <form action="Registrar_Usuarios.php" method="POST" onsubmit="return validarCheckbox();">
        <?php if (isset($_GET['exito'])): ?>
            <p class="success">¡Usuario registrado con éxito!</p>
        <?php elseif (isset($_GET['error'])): ?>
            <p class="error">
                <?php
                if ($_GET['error'] === 'usuario') {
                    echo "El usuario ya existe.";
                } else {
                    echo "Error al registrar usuario. Intenta de nuevo.";
                }
                ?>
            </p>
        <?php endif; ?>
        <h1>Registro</h1>
            <div class="input-box">
                <label for="usuario">Usuario</label>
                <input type="text" name="usuario" id="usuario" placeholder="Elige un usuario" required>
            </div>
            <div class="input-box">
                <label for="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Elige una contraseña" required>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox" id="checkbox" required>He leído y acepto los términos</label>
            </div>
            <button type="submit" class="btn-login">Registrarse</button>
            <div class="register-link">
                <p>¿Ya tienes una cuenta? <a href="index__login.php">Inicia sesión</a></p>
            </div>
        </form>
    </div>
    <script>
    function validarCheckbox() {
        if (!document.getElementById('checkbox').checked) {
            alert('Debes aceptar los términos.');
            return false;
        }
        return true;
    }
    </script>
</body>
</html>