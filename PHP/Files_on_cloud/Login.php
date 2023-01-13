<?php
$isUsername = true;
$isPassword = true;
session_start();
if (isset($_SESSION['username'])) {
    header("Location:index.php");
}
if (isset($_POST['Login'])) {
    require 'db_connect.php';
    $Username = $_POST['username'];
    $Password = $_POST['password'];
    $sqlDBcheck = "SELECT * FROM `users` WHERE `username` = '$Username'";
    $isExist = mysqli_query($conn, $sqlDBcheck);
    if (mysqli_num_rows($isExist) > 0) {
        while ($row = mysqli_fetch_assoc($isExist)) {
            if (password_verify($Password, $row['password'])) {
                session_start();
                $_SESSION['username'] = $row['username'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['password'] = $row['password'];
                header("Location: index.php");
            } else {
                $isPassword = false;
            }
        }
    } else {
        // echo 'username not correct';
        $isUsername = false;
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>myFiles | LogIn</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="Login.css">
    <link rel="stylesheet" href="alert.css">
    <script src="login.js"></script>

</head>

<body>
    <?php
    if (!$isUsername || !$isPassword) {
        echo '<div id="alert">
                <strong class="items">Error!</strong>
                <span class="items">Username or Password is not correct.</span>
              </div> ';
    }
    ?>
    <div class="container">
        <div class="gridbox">
            <img src="images/cloud.png" alt="">
            <h2>LogIn To: myFiles</h2>
            <form action="Login.php" method="post">
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <button type="submit" name="Login" style="background-color: #008CBA;">Log In</button>
                <!-- <input type="submit" class="subBtn" value="Log In" style="background-color: #64a2ff; cursor:pointer"> -->
            </form>
            <button onclick="redirect()" style="background-color: #008CBA;">Sign In</button>
            <!-- <input type="button" class="subBtn" id="Btn" value="Sign In" style="background-color: #64a2ff; cursor:pointer"> -->
        </div>
    </div>
</body>

</html>