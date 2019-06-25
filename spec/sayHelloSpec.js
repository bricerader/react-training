import * as sayHello from '../src/scripts/sayHello';

describe('Greet', function () {
    it('concats Hello and a name', function () {
        const actual = sayHello.greet('dip shit');
        const expected = 'Hello, dip shit';
        expect(actual).toEqual(expected);
    });

    it('no name Hello world', function () {
        const actual = sayHello.greet();
        const expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });

    it('empty name Hello world', function () {
        const actual = sayHello.greet('');
        const expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });
});