<?php
require 'db_connect.php';
session_start();
if (!isset($_SESSION['username'])) {
    header("Location:Login.php");
}

$username = $_SESSION['username'];
$sql = "SELECT `Files` FROM `$username`";
$result = mysqli_query($conn, $sql);
$numOfRows = mysqli_num_rows($result);

$isAdmin = false;
if ($username == "rakshank_verma85") {
    $isAdmin = true;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="index.css">
    <title>myFiles</title>
</head>

<body>
    <nav class="navbar">
        <div class="logo">
            <img src="images/cloud.png" alt="">
        </div>
        <li class="item"><a class="navitem" href="Logout.php">Logout</a></li>
        <li class="item"><a class="navitem" href="DeleteAcc.php">Delete Account</a></li>
        <?php
        if ($isAdmin) {
            echo '<li class="item"><a class="navitem" href="Users.php">Users</a></li>';
        }
        ?>
        <h1>
            <?php
            echo $_SESSION['username'];
            ?>
        </h1>
    </nav>
    <div class="content">
        <?php
        $count = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            // echo "<a class='contitem' href=" . "Data/{$row['filename']}" . ">{$row['id']}" ."  "."{$row['filename']}</a>";
            echo "<a id='1' class='contitem' href='Data/$username/{$row['Files']}'>{$row['Files']}</a>";
            // echo "<a class='contitem' href='open.php?file={$row['Files']}'>{$row['Files']}</a>";
            echo "<a id='2' class='contitem' href='Data/$username/{$row['Files']}' download style='color: green;'>Download</a>";
            echo "<a id='3' class='delbtn' href='deletefile.php?fname={$row['Files']}'>Delete</a>";
            // echo "<a class='delbtn' href='renamefile.php?fname={$row['filename']}'>Rename</a>";
            echo "<div id='4' class='rename'>
                        <input type='button' value='Rename' class='newNameBtn' onclick='rename($count)'>
                        <form action='renamefile.php' method='post' class='renameform'>
                            <input type='text' name='newName' placeholder='New Name'>
                            <input type='hidden' name='oldName' value='{$row['Files']}'>
                            <input type='submit' value='Rename'>
                        </form>
                      </div>";
            $count++;
        }
        ?>

    </div>

    <div id="subFiles">
        <form action="getFiles.php" method="post" enctype="multipart/form-data" id="SubmitForm">
            <input type="file" name="userfile" accept=".pdf, image/*">
            <input type="submit" value="Submit">
        </form>
    </div>
    <script>
        // document.getElementsByClassName('newNameBtn').onclick = 
        function rename(count) {
            // console.log("hello");
            let newBtn = document.querySelectorAll('.newNameBtn');
            newBtn[count].style.display = "none";
            let newForm = document.querySelectorAll(".renameform");
            newForm[count].style.display = "block";
        }
    </script>
</body>

</html>