<?php    
 session_start();
 var_dump($_SESSION['username']);
 var_dump($_COOKIES['rememberme']);
session_destroy();
    
 ?>
