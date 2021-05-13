<?php

require "controls/login-action.php";

if (!isset($_SESSION['username'])) {
    header('location: ./');
}

if (isset($_SESSION['tipo_usuario']) === 'administrador') {
    header('location: ./homepage-adm.php');
}

?>

<!doctype html>
<html lang="es-CO">

<head>
    <title>El Buen Doctor - Página Principal</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" crossorigin="anonymous">
    <link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css" rel="stylesheet">
    <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="inc/css/style.css">
</head>

<body>
    <div class="wrapper d-flex align-items-stretch">
        <nav id="sidebar-per">
            <div class="p-4 pt-5">
                <a href="#" class="img logo rounded-circle mb-3" style="background-image: url('<?php echo ($_SESSION['foto']) ?>');"></a>
                <a id="welcome-user">¡Bienvenido <?php echo ($_SESSION['username']); ?>!</a>
                <a id="text-tools">Herramientas</a>
                <ul class="list-unstyled components mb-5">
                    <li>
                        <a href="assign-patient.php">Visualizar pacientes asignados</a>
                    </li>
                    <a href="index.php?logout=true">Cerrar Sesión</a>
                    </li>
                </ul>

                <div class="footer">
                    <p>
                        Copyright &copy;
                        <script>
                            document.write(new Date().getFullYear());
                        </script> <br>Todos los derechos reservados | <br> Este sitio fue desarrollado
                        <i class="icon-heart" aria-hidden="true"></i> por <a target="_blank" href="https://www.facebook.com/fdochoa/">Felix Ochoa & Sebastian Camacho</a>
                    </p>
                </div>

            </div>
        </nav>

        <div id="content" class="p-4 p-md-4"><button type="button" id="sidebarCollapse" class="btn btn-primary per">
                <i class="fa fa-bars"></i>
                <span class="sr-only">Toggle Menu</span>
            </button>