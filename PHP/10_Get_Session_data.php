<?php
    session_start();
    if(isset($_SESSION['username'])){
        echo "Welcome ". $_SESSION["username"];
        echo "<br> Your favourite category is ".$_SESSION["favCat"];
    }
    else{
        echo "Please log in to continue.";
    }

?>