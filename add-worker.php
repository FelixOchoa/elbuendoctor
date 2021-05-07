<?php
include("sidebar-adm.php");
?>

<div class="container">
    <h2>Añadir trabajador</h2>
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
                    <input id="Username" type="text" class="form-control" placeholder="Nombre de Usuario" value="" />
                </div>
                <div class="form-group">
                    <input id="Password" type="password" class="form-control" placeholder="Contraseña" value="" />
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <select id="Cargo" class="form-control">
                        <option class="hidden" selected disabled>Cargo</option>
                        <option>Medico</option>
                        <option>Fisioterapeuta</option>
                        <option>Enfermero</option>
                    </select>
                </div>
                <div class="form-group">
                    <select id="Estado" class="form-control">
                        <option class="hidden" selected disabled>Estado</option>
                        <option>Activo</option>
                        <option>Inactivo</option>
                    </select>
                </div>
                <div class="form-group">
                    <select id="Trabajando" class="form-control">
                        <option class="hidden" selected disabled>Trabajando</option>
                        <option>En servicio</option>
                        <option>Libre</option>
                    </select>
                </div>
                <div class="form-group">
                    <input id="Foto" type="text" class="form-control" placeholder="Foto (URL)" value="" />
                </div>
            </div>

        </div>
    </form>
    <button id="btn-add-adm" type="submit" class="btn btn-primary adm">Añadir</button>


</div>


<?php
include("footer.php");
?>