<!DOCTYPE html>
<html lang="es-CO">

<head>
    <title>El Buen Doctor - Iniciar Sesión</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet'>
    <link rel="stylesheet" href="inc/css/login.css">
</head>

<body>
    <div class="container-login">
        <div class="card">
            <h4>Iniciar Sesión</h4>
            <form id="login" action="controls/action.php" method="POST" enctype="multipart/form-data">
                <input type="text" name="username" id="username" placeholder="Nombre de Usuario">
                <input type="password" name="password" id="password" placeholder="Contraseña">
                <input type="submit" id="button" value="Iniciar">
            </form>
        </div>
        <div class="container-logo">
            <a href="#">
                <h1>El Buen Doctor</h1>
            </a>
        </div>
    </div>
    <script src="inc/js/login.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="inc/js/jquery.min.js"></script>
</body>

</html>