setTimeout(() => {
    document.getElementById("alert").style.animationName = "alert2";
    document.getElementById("alert").style.animationDuration = 2000;
    document.getElementById("alert").style.animationTimingFunction = "ease";
}, 3000);

setTimeout(() => {
    document.getElementById("alert").style.display = "none";
}, 4000);

function redirect() {
    location.replace('SignUp.php');
}