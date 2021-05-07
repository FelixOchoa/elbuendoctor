<?php

include "config.php";

$username = $_POST['username'];
$contraseña = $_POST['password'];


$sql =  mysqli_query($con, "SELECT * FROM user WHERE username = '$username'");

if ($sql == true) {
    $user = mysqli_fetch_assoc($sql);
    if ($user == null) {
        $respuesta = array('response' => 'mal');
    } else {
        if ($user['password'] != $contraseña) {
            $respuesta = array('response' => 'mal');
        } else {

            $_SESSION['username'] = $user['username'];
            $_SESSION['tipo_usuario'] = $user['tipo_usuario'];
            $_SESSION['foto'] = $user['foto'];
            
            $respuesta = array(
                'response' => 'bien',
                'cargo' => $user['tipo_usuario']
            );
        }
    }
}

echo (json_encode($respuesta));
