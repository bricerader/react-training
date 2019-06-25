import React from 'react';
import TestUtils from 'react-dom/test-utils';
import RadioButton from '../src/components/RadioButton';

describe('RadioButton', function () {
    let component;
    beforeEach(function () {
        component = TestUtils.renderIntoDocument(<RadioButton label="Graham"/>);
    });

    it('renders without problems', function () {
        expect(component).toEqual(jasmine.anything());
    });

    it('should print a message', function () {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'div').textContent;
        let expected = 'Graham';
        expect(actual).toEqual(expected);
    });
});