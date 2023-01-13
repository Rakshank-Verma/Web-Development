<?php
    require 'db_connect.php';
    session_start();
    if(!isset($_SESSION['username']))
    {
        header("Location:Login.php");
    }

    // Uploading to server
    $upload_dir = "Data/{$_SESSION['username']}";
    $nameOfFile = $_FILES['userfile']['name'];
    $tmp_name = $_FILES['userfile']['tmp_name'];
    $result1 = move_uploaded_file($tmp_name, "$upload_dir/$nameOfFile");

    // Adding to Database
    $sql = "INSERT INTO `{$_SESSION['username']}`(`Files`) VALUES('$nameOfFile')";
    $result2 = mysqli_query($conn, $sql);

    if($result1 && $result2){
        header("Location: index.php");
    }
?>