import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton';

describe('PollSubmitButton', function () {
    it('renders without problems', function () {
        const submitButton = TestUtils.renderIntoDocument(<PollSubmitButton/>);
        expect(submitButton).toEqual(jasmine.anything());
    });
});