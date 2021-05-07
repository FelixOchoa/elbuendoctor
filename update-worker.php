<?php
include("sidebar-adm.php");
?>

<div class="container">
    <form class="form-horizontal">
        <div class="row register-form">
            <div class="col-md-6">
                <div class="form-group">
                    <input id="NombreBuscar" type="text" class="form-control" placeholder="Nombre" value="" />
                </div>
            </div>
        </div>
    </form>
    <button id="btn-upd-adm" type="submit" class="btn btn-primary adm">Buscar</button>


<?php
include("footer.php");
?>