<?php
include("sidebar-per.php");
?>

<div class="container">
    <div id="probando">

    </div>
</div>

<div class="container w-full md:w-4/5 xl:w-3/5 px-2">

    <a id="<?php echo ($_SESSION['username']) ?>" class="un_doctor"></a>
    <h2>
        Editar Cita
    </h2>
    <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <table id="ListarCitas" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
            <thead>
                <tr>
                    <th>Estado de Cita</th>
                    <th>Codigo Paciente</th>
                    <th>Fecha de la Cita</th>
                    <th>Observación del Médico</th>
                    <th>Editar Estado</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

</div>

<div class="container w-full md:w-4/5 xl:w-3/5 px-2">

    <a id="<?php echo ($_SESSION['username']) ?>" class="un_doctor"></a>
    <h2>
        Pacientes asignados
    </h2>
    <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <table id="ListarPacientesAsignados" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
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