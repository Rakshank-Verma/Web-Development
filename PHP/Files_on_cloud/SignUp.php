<?php
require 'db_connect.php';
session_start();
if(isset($_SESSION['username']))
{
    header("Location:Login.php");
}
$error = false;
$isEmail=0;
$isUsername=0;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];

    if (empty($email) || empty($username) || empty($password)) {
        $error = true;
    } 
    else {

        $checkEmail = "SELECT `email` FROM `users` WHERE `email` = '$email'";
        $existEmail = mysqli_query($conn, $checkEmail);
        $isEmail = mysqli_num_rows($existEmail);
        
        $checkUname = "SELECT `username` FROM `users` WHERE `username` = '$username'";
        $existUname = mysqli_query($conn, $checkUname);
        $isUsername = mysqli_num_rows($existUname);

        if ($isEmail == 0 && $isUsername == 0) {
            $encrypPasswd = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO `users`(`email`, `username`, `password`, `date/time`) VALUES('$email', '$username', '$encrypPasswd', now())";

            $result = mysqli_query($conn, $sql);
            if ($result) {
                // echo "details added successfully";
                mkdir("Data/$username");
                $sqlQueryforDBofUser = "CREATE TABLE `$username` (`Files` varchar(100))";
                if(mysqli_query($conn, $sqlQueryforDBofUser)){
                    header("Location:index.php");
                }
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>myFiles | Signup</title>
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="SignUp.css">
    <link rel="stylesheet" href="alert.css">
    <script src="login.js"></script>
</head>

<body>

    <?php
    if ($error) {
        echo '<div id="alert">
                <strong class="items">Error!</strong>
                <span class="items">All fields are required.</span>
              </div> ';
    }

    if ($isEmail > 0) {
        echo '<div id="alert">
                <strong class="items">Error!</strong>
                <span class="items">Email already exists.</span>
              </div> ';
    }

    if ($isUsername > 0) {
        echo '<div id="alert">
                <strong class="items">Error!</strong>
                <span class="items">Username already exists. Try different one.</span>
              </div> ';
    }
    ?>

    <div class="container">
        <div class="gridbox">
            <img src="images/cloud.png" alt="">
            <h2>SignIn To: myFiles</h2>
            <form action="SignUp.php" method="post">
                <input type="email" name="email" placeholder="Email">
                <input type="username" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <input type="submit" value="Sign In" style="background-color: #64a2ff;">
            </form>
        </div>
    </div>
</body>

</html>