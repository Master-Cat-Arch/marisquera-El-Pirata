<?php
/* Encripta la contraseña antes de guardarla (cambia los datos a encriptar)
                $passwordHash = password_hash($password, PASSWORD_BCRYPT);
                $rol = 'Cliente'; // Rol por defecto

            // Inserta el nuevo usuario en la base de datos
                $stmt = $conexion->prepare("INSERT INTO Usuarios (usuario, password, rol) VALUES (?, ?, ?)");
                if (!$stmt) {
                    header("Location: registro.php?error=registro");
                    exit;
                }
                $stmt->bind_param('sss', $usuario, $passwordHash, $rol);
                if ($stmt->execute()) 
                {
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
*
?>
