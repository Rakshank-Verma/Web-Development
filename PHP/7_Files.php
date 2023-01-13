<?php

// $a = readfile("aFile.txt");
// echo "<br>";
// echo "$a";

// better than above aproach
// $fptr = fopen("aFile.txt", "r"); //fptr returns true or false on success and failure
// echo var_dump($fptr);

// reading content of file
// $content = fread($fptr, filesize("aFile.txt"));
// echo $content;

// fget() -> read a line
// echo fgets($fptr); //read first line only
// echo fgets($fptr); //read second line now
// echo fgets($fptr); //read second line now
// echo var_dump(fgets($fptr));

// fgetc() -> read a character
// fgetc($fptr);

// reading file character by character
// while($a = fgetc($fptr)){
//     echo $a;
//     if($a == 'w'){
//         break;
//     }
// }

// reading file line by line
// while($a=fgets($fptr)){
//     echo $a;
// }
// echo "<br>";
// echo "End of file";


$fptr = fopen("Afile2.txt", "w");
fwrite($fptr, "This is Afile2.txt.\n"); //fwrite() overwrite previous content
fwrite($fptr, "This is second line in Afile2.txt.");
fclose($fptr);

$fptr = fopen("Afile2.txt", "a");
fwrite($fptr, "This is being appended");
fclose($fptr);



?>