<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "phplearning";

    $conn = mysqli_connect($servername, $username, $password, $database);

    $sql = "SELECT * from `contacts`";
    $result = mysqli_query($conn, $sql);

    //Find no. of records returned
    $num = mysqli_num_rows($result);
    echo $num;
    echo "<br>";

    //Display the rows returned by the sql query
    if($num>0){
        // $row = mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // $row = mysqli_fetch_assoc($result);
        // echo var_dump($row);

        while($row = mysqli_fetch_assoc($result)){
            // echo var_dump($row);
            echo $row['sr.no'] . " " . $row['email'];
            echo "<br>";
        }
    }
?>