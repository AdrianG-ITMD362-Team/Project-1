var js_available = document.getElementsByTagName('html')[0];
var form = document.getElementById("signup_form");

function js_ready(){
    js_available.setAttribute('class', 'hasjs');
}

function clickbutton(){
    alert("Thank you taking a interest in our game, we hope to see you in the future beta!");
}

window.addEventListener('load', js_ready);
form.addEventListener("submit", clickbutton);

