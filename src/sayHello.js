exports.greet = function greet(name) {
    if (name != null && '' !== name) {
        return 'Hello, ' + name;
    } else {
        return 'Hello, World';
    }
};