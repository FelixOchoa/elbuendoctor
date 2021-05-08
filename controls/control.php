<?php

include "config.php";

switch ($_POST['opcion']) {
  case "AñadirTrabajador":
    AñadirTrabajador($con);
    break;
  case "ListarPersonal":
    ListarPersonal($con);
    break;
  case "BuscarPersonal":
    BuscarPersonal($con);
    break;
  case "ActualizarPersonal":
    ActualizarPersonal($con);
    break;
  case "EliminarPersonal":
    EliminarPersonal($con);
    break;
  case "AñadirPaciente":
    AñadirPaciente($con);
    break;
  case "ListarPaciente":
    ListarPaciente($con);
    break;
  case "BuscarPaciente":
    BuscarPaciente($con);
    break;
  case "ActualizarPaciente":
    ActualizarPaciente($con);
    break;
  case "EliminarPaciente":
    EliminarPaciente($con);
    break;
  case "AñadirCita":
    AñadirCita($con);
    break;
  case "ListarPacienteDisponible":
    ListarPacienteDisponible($con);
    break;
  case "ListarPersonalDisponible":
    ListarPersonalDisponible($con);
    break;
  case "ListarPacientesAsignados":
    ListarPacientesAsignados($con);
    break;
  case "ListarCita":
    ListarCita($con);
    break;
  case "EditarCita":
    EditarCita($con);
    break;
  case "BuscarCita":
    BuscarCita($con);
    break;
}

function AñadirTrabajador($con)
{
  $Nombre = $_POST['Nombre'];
  $Apellido = $_POST['Apellido'];
  $Username = $_POST['Username'];
  $Password = $_POST['Password'];
  $Trabajando = $_POST['Trabajando'];
  $Estado = $_POST['Estado'];
  $Tipo_Usuario = $_POST['Tipo_Usuario'];
  $Foto = $_POST['Foto'];

  $sql = "INSERT INTO user (codigo,username,password,nombre,apellido,foto,tipo_usuario,estado,trabajando) VALUES (default, '$Username', '$Password', '$Nombre', 
    '$Apellido', '$Foto', '$Tipo_Usuario', '$Estado', '$Trabajando')";

  if (mysqli_query($con, $sql)) {
    echo ("true");
  } else {
    echo mysqli_error($con);
  }
}
function AñadirPaciente($con)
{
  $Nombre = $_POST['Nombre'];
  $Apellido = $_POST['Apellido'];
  $FechaNacimiento = $_POST['FechaNacimiento'];
  $Edad = (int)$_POST['Edad'];
  $CiudadNacimiento = $_POST['CiudadNacimiento'];
  $Direccion = $_POST['Direccion'];
  $Barrio = $_POST['Barrio'];
  $Telefono = $_POST['Telefono'];
  $Estado = $_POST['Estado'];
  $Foto = $_POST['Foto'];

  $sql = "INSERT INTO paciente (cod_paciente,nombre,apellido,foto,fecha_nacimiento,edad,direccion,barrio,telefono,ciudad,estado) VALUES 
    (default, '$Nombre','$Apellido', '$Foto', '$FechaNacimiento','$Edad','$Direccion','$Barrio','$Telefono','$CiudadNacimiento', '$Estado')";

  if (mysqli_query($con, $sql)) {
    echo ("true");
  } else {
    echo mysqli_error($con);
  }
}

function AñadirCita($con)
{
  $cod_paciente = (int)$_POST['cod_paciente'];
  $fecha_cita = $_POST['fecha_cita'];
  $username = $_POST['username'];

  $sql = "INSERT INTO citas (cod_cita, cod_paciente, estado_cita, fecha_cita, un_doctor) VALUES (default, '$cod_paciente', NULL, '$fecha_cita', '$username')";

  if (mysqli_query($con, $sql)) {
    echo ("true");
  } else {
    echo mysqli_error($con);
  }
}

function ListarPacientesAsignados($con)
{
  $username = $_POST['username'];

  $sql = mysqli_query($con, "SELECT cod_paciente FROM citas WHERE un_doctor = '$username'");

  $personal = array(); //creamos un array
  $pacientes = array();

  while ($row = mysqli_fetch_array($sql)) {
    $personal[] = $row;
  }

  foreach ($personal as $cp) {
    $sql2 = mysqli_query($con, "SELECT foto, nombre, apellido, fecha_nacimiento, edad, direccion, barrio, telefono, ciudad, estado, cod_paciente FROM paciente WHERE cod_paciente = '$cp[0]'");

    while ($row = mysqli_fetch_array($sql2)) {
      $pacientes[] = $row;
    }
  }

  echo json_encode($pacientes);
}

function ListarCita($con)
{
  $username = $_POST['username'];

  $sql = mysqli_query($con, "SELECT cod_paciente, estado_cita, fecha_cita FROM citas WHERE un_doctor = '$username'");

  $citas = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    $citas[] = $row;
  }

  echo json_encode($citas);
}

function ListarPersonal($con)
{

  $sql = mysqli_query($con, "SELECT foto, username, nombre, apellido, tipo_usuario, estado, trabajando, codigo FROM user");

  $personal = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    $personal[] = $row;
  }

  echo json_encode($personal);
}

function ListarPersonalDisponible($con)
{

  $sql = mysqli_query($con, "SELECT foto, username, nombre, apellido, tipo_usuario, estado, trabajando, codigo FROM user WHERE estado = 'activo'");

  $personal = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    $personal[] = $row;
  }

  echo json_encode($personal);
}

function ListarPaciente($con)
{

  $sql = mysqli_query($con, "SELECT foto, nombre, apellido, fecha_nacimiento, edad, direccion, barrio, telefono, ciudad, estado, cod_paciente FROM paciente");

  $paciente = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    $paciente[] = $row;
  }

  echo json_encode($paciente);
}

function ListarPacienteDisponible($con)
{

  $sql = mysqli_query($con, "SELECT foto, nombre, apellido, fecha_nacimiento, edad, direccion, barrio, telefono, ciudad, estado, cod_paciente FROM paciente WHERE estado = 'activo'");

  $paciente = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    $paciente[] = $row;
  }

  echo json_encode($paciente);
}

function BuscarPersonal($con)
{

  $personalT = $_POST['codigo'];

  $sql = mysqli_query($con, "SELECT nombre, apellido, foto, tipo_usuario, estado, trabajando FROM user where codigo = '$personalT' ");

  $personalT = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    array_push($personalT, $row);
  }

  echo json_encode($personalT);
}

function BuscarPaciente($con)
{

  $pacienteT = $_POST['cod_paciente'];

  $sql = mysqli_query($con, "SELECT foto, nombre, apellido, fecha_nacimiento, edad, direccion, barrio, telefono, ciudad, estado, cod_paciente FROM paciente where cod_paciente = '$pacienteT' ");

  $pacienteT = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    array_push($pacienteT, $row);
  }

  echo json_encode($pacienteT);
}

function BuscarCita($con)
{
  $cod_paciente = $_POST['cod_paciente'];

  $sql = mysqli_query($con, "SELECT estado_cita FROM citas where cod_paciente = '$cod_paciente' ");

  $pacienteT = array(); //creamos un array

  while ($row = mysqli_fetch_array($sql)) {
    array_push($pacienteT, $row);
  }

  echo json_encode($pacienteT);
}


function ActualizarPaciente($con)
{

  $cod_paciente = $_POST['cod_paciente'];
  $Nombre = $_POST['Nombre'];
  $Apellido = $_POST['Apellido'];
  $fecha_nacimiento = $_POST['fecha_nacimiento'];
  $Estado = $_POST['Estado'];
  $edad = (int)$_POST['edad'];
  $direccion = $_POST['direccion'];
  $barrio = $_POST['barrio'];
  $telefono = $_POST['telefono'];
  $ciudad = $_POST['ciudad'];
  $Foto = $_POST['Foto'];

  $sql = mysqli_query($con, "UPDATE paciente SET nombre = '$Nombre', apellido = '$Apellido', foto = '$Foto', fecha_nacimiento = '$fecha_nacimiento', estado = '$Estado', edad = '$edad', direccion = '$direccion', barrio = '$barrio', telefono = '$telefono', ciudad = '$ciudad' WHERE cod_paciente = '$cod_paciente'");

  if ($sql == true) {
    echo ("true");
  } else {
    echo mysqli_error($con);
  }
}

function EditarCita($con)
{
  $estado_cita = $_POST['estado_cita'];
  $cod_paciente = $_POST['cod_paciente'];

  $sql = mysqli_query($con, "UPDATE citas SET estado_cita = '$estado_cita' WHERE cod_paciente = '$cod_paciente'");

  if ($sql == true) {
    echo ("true");
  } else {
    echo mysqli_error($con);
  }
}


function ActualizarPersonal($con)
{

  $codigo = $_POST['codigo'];

  $Nombre = $_POST['Nombre'];
  $Apellido = $_POST['Apellido'];
  $Trabajando = $_POST['Trabajando'];
  $Estado = $_POST['Estado'];
  $Tipo_Usuario = $_POST['Tipo_Usuario'];
  $Foto = $_POST['Foto'];

  $sql = mysqli_query($con, "UPDATE user SET nombre = '$Nombre', apellido = '$Apellido', foto = '$Foto', tipo_usuario = '$Tipo_Usuario', estado = '$Estado', trabajando = '$Trabajando' WHERE codigo = '$codigo'");

  if ($sql == true) {
    echo ("true");
  } else {
    echo mysqli_error($con);
  }
}

function EliminarPersonal($con)
{

  $personalE = $_POST['codigo'];

  $sql = mysqli_query($con, "DELETE FROM user WHERE codigo = '$personalE'");

  if ($sql == true) {
    echo ("true");
  } else {
    echo ("false");
  }
}

function EliminarPaciente($con)
{

  $pacienteE = $_POST['cod_paciente'];

  $sql = mysqli_query($con, "DELETE FROM paciente WHERE cod_paciente = '$pacienteE'");

  if ($sql == true) {
    echo ("true");
  } else {
    echo ("false");
  }
}
