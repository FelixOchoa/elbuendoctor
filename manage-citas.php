<?php
include("sidebar-adm.php");
?>

<div class="container w-full md:w-4/5 xl:w-3/5 px-2">

<h2>
    Personal de atención
</h2>
    <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <table id="ListaPersonal" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
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
    Pacientes
</h2>
    <div id='recipients' class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <table id="ListaPaciente" class="stripe hover" style="width:100%; padding-top: 1em;  padding-bottom: 1em;">
            <thead>
                <tr>
                    <th>Foto</th>
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

