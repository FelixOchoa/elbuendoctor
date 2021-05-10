<?php
include("sidebar-adm.php");
?>

<div class="container">
    <h2>Añadir Cita</h2>
    <form class="form-horizontal" action="">
        <div class="row register-form">
            <div class="col-md-6">
                <div class="form-group">
                    <input id="cod_paciente" type="text" class="form-control" placeholder="Codigo del Paciente" value="" />
                </div>
                <div class="form-group">
                    <input id="fechaCita" type="date" class="form-control" placeholder="Fecha de Cita" value="" />
                </div>

            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input id="username" type="text" class="form-control" placeholder="Nombre de usuario del medico" value="" />
                </div>
            </div>

        </div>
    </form>
    <button id="btn-add-cts" type="submit" class="btn btn-primary adm">Añadir</button>
</div>



<div class="container w-full md:w-4/5 xl:w-3/5 px-2">

    <h2>
        Personal de atención activos
    </h2>
    <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <table id="ListarPersonalDisponible" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre de Usuario</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Tipo Usuario</th>
                    <th>Estado</th>
                    <th>Trabajando</th>
                    <th>Gestión</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

</div>

<div class="container w-full md:w-4/5 xl:w-3/5 px-2">
    <h2>
        Pacientes activos
    </h2>
    <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <table id="ListarPacienteDisponible" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha de nacimiento</th>
                    <th>Edad</th>
                    <th>Direccion</th>
                    <th>Barrio</th>
                    <th>Telefono</th>
                    <th>Ciudad</th>
                    <th>Estado</th>
                    <th>Gestión</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

</div>
<?php
include("footer.php");
?>