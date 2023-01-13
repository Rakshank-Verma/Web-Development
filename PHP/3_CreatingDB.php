<?php
    $servername = "localhost";
    $username = "root";
    $password = "";

    //Create a connection
    $conn = mysqli_connect($servername, $username, $password);

    //Creating DB
    $sql ="CREATE DATABASE rakshankverma";
    $result = mysqli_query($conn, $sql);
    echo var_dump($result);
?>