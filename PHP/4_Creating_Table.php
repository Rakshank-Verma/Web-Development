<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "rakshankverma";

    $conn = mysqli_connect($servername, $username, $password, $database);
    $sql = "CREATE TABLE `employeeses` ( `sr.no` INT NOT NULL AUTO_INCREMENT ,  `name` VARCHAR(11) NOT NULL ,  `role` VARCHAR(11) NOT NULL ,  `dept` VARCHAR(11) NOT NULL ,    PRIMARY KEY  (`sr.no`))";

    mysqli_query($conn, $sql);
?>