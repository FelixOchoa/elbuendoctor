<?php

require "controls/login-action.php";

if(isset($_GET['logout'])){
    session_destroy();
}


include("login.php");

?>