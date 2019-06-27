import React from 'react';
import TestUtils from 'react-dom/test-utils';
import CurrentChoice from '../CurrentChoice';
import TestWrapper from '../TestWrapper';

describe('Current Choice', function () {
    let component;
    beforeEach(function() {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <CurrentChoice checkedValue='Graham'/>
            </TestWrapper>
        );
    });

    it('renders without problems', function () {
        expect(component).toEqual(jasmine.anything());
    });

    it('should print a message', function () {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'div').textContent;
        let expected = 'Current selection: ';
        expect(actual).toEqual(expected);
    });
});