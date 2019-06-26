import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TestWrapper from '../TestWrapper';

describe('Poll Submit Button', function () {
    it('should render without a problem', function () {
        const PollSubmitButton = require('../PollSubmitButton').default;
        let pollsubmitbutton = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton/>
            </TestWrapper>);

        let buttonText = ReactDOM.findDOMNode(pollsubmitbutton).textContent;

        expect(buttonText).toEqual('See who\'s the biggest bish');
    });

    it('should call handler function on click', function () {
        const PollSubmitButton = require('../PollSubmitButton').default;
        const handleClick = jest.fn();
        const pollsubmitbutton = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton question={0}
                handleClick={handleClick}/>
            </TestWrapper>
        );

        const buttonInstance = ReactDOM.findDOMNode(pollsubmitbutton);
        TestUtils.Simulate.click(buttonInstance);
        expect(handleClick).toHaveBeenCalled();
        const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;
        expect(numberOfCallsMadeIntoMockFunction).toBe(1);
    });

});