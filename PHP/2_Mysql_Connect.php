<?php
    //Ways to connect to a mysql database
    // 1. MySQLi extension
    // 2. PDO(php data objects)

    //Connecting to database
    $servername = "localhost";
    $username = "root";
    $password = "12345";

    //Create a connection
    $conn = mysqli_connect($servername, $username, $password);

    //Die if connection was not successful
    if(!$conn){die("Sorry we failed to connect: ".mysqli_connect_error());}
    else{echo "Connection was successful";}
    $sql ="CREATE DATABASE rakshankverma";
    $result = mysqli_query($conn, $sql);
?>