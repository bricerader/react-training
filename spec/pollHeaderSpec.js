import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader';

describe('Poll Header', function () {
    let component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(<PollHeader text="Welcome to the Poll!"/> );
    });

    it('renders without problems', function () {
        expect(component).toEqual(jasmine.anything());
    });

    it('should print a message', function () {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h1').textContent;
        let expected = 'Welcome to the Poll!';
        expect(actual).toEqual(expected);
    });
});