<?php
    require 'db_connect.php';
    session_start();
    if(isset($_SESSION['username']) && $_SESSION['username'] == 'rakshank_verma85'){
        $sql = "SELECT * FROM `users`";
        $result = mysqli_query($conn, $sql);
    }
    else{
        header("Location: Login.php");
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            padding: 0;
            width: 100vw;
            height: auto;
        }
        .container{
            margin: 5px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
            grid-template-rows: min-content;
            grid-gap: 5px;
        }
        div.content{
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class='content'><strong>sr.no</strong></div>
        <div class='content'><strong>email</strong></div>
        <div class='content'><strong>username</strong></div>
        <div class='content'><strong>date/time</strong></div>
        <?php
            while($row = mysqli_fetch_assoc($result)){
                echo "<div class='content'>{$row['sr.no']}</div>";
                echo "<div class='content'>{$row['email']}</div>";
                echo "<div class='content'>{$row['username']}</div>";
                echo "<div class='content'>{$row['date/time']}</div>";
            }
        ?>
    </div>
</body>
</html>