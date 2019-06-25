var sayHello = require('./sayHello');
window.addEventListener('load', function () {
    document.getElementById('welcome-message')
        .innerHTML = sayHello.greet('hoser');
});