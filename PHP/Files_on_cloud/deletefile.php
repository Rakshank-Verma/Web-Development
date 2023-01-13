<?php

require 'db_connect.php';
session_start();
if(! isset($_SESSION['username']) )
{
    header("Location:Login.php");
}
$filename = $_GET['fname'];
// echo $fileid;
$delQuery = "DELETE FROM `{$_SESSION['username']}` WHERE `Files` = '$filename'";
$isDelete = mysqli_query($conn, $delQuery);
if($isDelete){
    unlink("Data/{$_SESSION['username']}/$filename");
    header("Location:index.php");
}

?>
