var js_available = document.getElementsByTagName('html');

function js_ready(){
    js_available.setAttribute('class', 'hasjs');
}

window.addEventListener('load', js_ready);
