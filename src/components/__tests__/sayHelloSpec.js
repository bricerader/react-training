import React from 'react';
import TestUtils from 'react-dom/test-utils';
import SayHello from '../../scripts/SayHello';

describe('Greet', function () {
    it('renders without problems', function () {
        const sayHello = TestUtils.renderIntoDocument(<SayHello/>);
        expect(sayHello).toEqual(jasmine.anything());
    });
});