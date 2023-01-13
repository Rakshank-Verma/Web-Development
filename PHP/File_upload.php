<?php
    $uploads_dir = 'uploads';
    // echo count($_FILES['userfile']);
    echo $_FILES["userfile"]["name"];
    echo "  ";
    echo $_FILES["userfile"]["size"];
    echo "  ";
    echo $_FILES['userfile']['tmp_name'];
    echo "  ";
    echo $_FILES['userfile']['type'];
    echo "  ";
    echo pathinfo($_FILES['userfile']['name'], PATHINFO_EXTENSION);
    // echo $_FILES['userfile']['name'][1];
    $tmp_name = $_FILES['userfile']['tmp_name'];
    // echo $_FILES['userfile']['tmp_name'];
    // $name = basename($_FILES['userfile']['name'], ".exe");
    $name = $_FILES['userfile']['name'];
    // echo $name;
    // move_uploaded_file($tmp_name, "$uploads_dir/$name");  
?>

<a href="uploads\bg.jpg">view pdf</a>