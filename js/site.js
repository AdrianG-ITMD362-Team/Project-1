var js_available = document.getElementsByTagName('html')[0];
var form = document.getElementById("signup_form");

// function to check if js can be loaded
function js_ready(){
  js_available.setAttribute('class', 'hasjs');
}

// function excuted when submit button is clicked
function clickbutton(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const check = document.getElementById("terms_box").value;
  let message;
  let subscribed;

  // if statement 
  if (name != ""){
    message = "Thank you " + name + " for taking a interest in our game, expect a future beta key in your inbox";
  } else {
    message = "Thank you " + email + " for taking a interest in our game, expect a future beta key in your inbox!";
  }
  if (check == "on"){
    subscribed = "\nYou have been subscribed to our bi-weekly update newsletter!";
  }

  alert(prompt + subscribed);
}

window.addEventListener('load', js_ready);
form.addEventListener("submit", clickbutton);

