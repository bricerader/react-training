const sayHello = require('./sayHello');

window.addEventListener('load', ()=> {
    document.getElementById('welcome-message').innerHTML = sayHello.greet('hoser');
});