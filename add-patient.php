<?php
include("sidebar-adm.php");
?>

<div class="container">
    <h2>Añadir Paciente</h2>
    <form class="form-horizontal" action="">
        <div class="row register-form">
            <div class="col-md-6">
                <div class="form-group">
                    <input id="Nombre" type="text" class="form-control" placeholder="Nombre" value="" />
                </div>

                <div class="form-group">
                    <input id="Apellido" type="text" class="form-control" placeholder="Apellido" value="" />
                </div>
                <div class="form-group">
                    <input id="FechaNacimiento" type="date" class="form-control" placeholder="Fecha de Nacimiento" min="1900-01-01" max="2100-01-01" />
                </div>
                <div class="form-group">
                    <input id="Edad" type="text" class="form-control" placeholder="Edad" value="" />
                </div>
                <div class="form-group">
                    <input id="CiudadNacimiento" type="text" class="form-control" placeholder="Ciudad de Nacimiento" value="" />
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input id="Direccion" type="text" class="form-control" placeholder="Direccion" value="" />
                </div>
                <div class="form-group">
                    <input id="Barrio" type="text" class="form-control" placeholder="Barrio" value="" />
                </div>
                <div class="form-group">
                    <input id="Telefono" type="text" class="form-control" placeholder="Teléfono" value="" />
                </div>
                <div class="form-group">
                    <select id="Estado" class="form-control">
                        <option class="hidden" selected disabled>Estado</option>
                        <option>Activo</option>
                        <option>Inactivos</option>
                    </select>
                </div>
                <div class="form-group">
                    <input id="Foto" type="text" class="form-control" placeholder="Foto (URL)" value="" />
                </div>
            </div>

        </div>
    </form>
    <button id="btn-upd-adm-patient" type="submit" class="btn btn-primary adm">Añadir</button>
</div>

<?php
include("footer.php");
?>