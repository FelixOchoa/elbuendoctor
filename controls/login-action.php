<?php

function user(){
    return isset($_SESSION['username']);
}
user();
session_start();

?>
