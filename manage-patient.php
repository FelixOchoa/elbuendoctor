<?php
include("sidebar-adm.php");
?>


<div class="container">
    <div id="probando">

    </div>
</div>

<div class="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">

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