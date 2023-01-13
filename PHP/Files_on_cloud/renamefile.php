<?php
require 'db_connect.php';
session_start();
if(!isset($_SESSION['username']))
{
    header("Location:Login.php");
}
$oldName = $_POST["oldName"];
$newName = $_POST["newName"];
// echo $newName;
// echo $oldName;
$renameQuery = "UPDATE `{$_SESSION['username']}` SET `Files`='$newName' WHERE `Files`='$oldName'";
$result = mysqli_query($conn, $renameQuery);
if($result){
    echo "rename successfully";
    rename("Data/{$_SESSION['username']}/$oldName", "Data/{$_SESSION['username']}/$newName");
    header("Location:index.php");
}
?>