<?php
    session_start();
    $_SESSION["username"] = "Harry";
    $_SESSION["favCat"] = "Books";
    echo "We have saved your session";

?>