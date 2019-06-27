import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../PollSubmitButton';
import TestWrapper from '../TestWrapper';

describe('PollSubmitButton', function () {
    it('renders without problems', function () {
        const submitButton = TestUtils.renderIntoDocument(
            <TestWrapper>
                <PollSubmitButton/>
            </TestWrapper>
        );
        expect(submitButton).toEqual(jasmine.anything());
    });
});