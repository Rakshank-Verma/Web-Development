let regex = /[<>.]/g;
let s = "rakshank_verm.a";
let s1 = 'script .alert("Hacked") /script';

if(regex.test(s)){
    console.log("username is valid");
}
else{
    console.log("username is not valid");
}