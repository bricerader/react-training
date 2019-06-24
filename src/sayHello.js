exports.greet = function greet(name) {
    if (name) {
        return 'Hello, ' + name;
    } else {
        return 'Hello, World';
    }
};