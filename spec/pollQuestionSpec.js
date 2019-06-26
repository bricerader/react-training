import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion';
import TestWrapper from '../src/components/TestWrapper';

describe('RadioButton', function () {
    let component;
    beforeEach(function () {
        component = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollQuestion text='Who is the biggest bish?'/>
            </TestWrapper>
        );
    });

    it('renders without problems', function () {
        expect(component).toEqual(jasmine.anything());
    });

    it('should print a message', function () {
        let actual = TestUtils.findRenderedDOMComponentWithTag(component, 'h2').textContent;
        let expected = 'Who is the biggest bish?';
        expect(actual).toEqual(expected);
    });
});