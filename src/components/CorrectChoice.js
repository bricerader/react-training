import React from 'react';
import PropTypes from 'prop-types';

function CorrectChoice(props) {
    return (<div>{props.checkedValue === props.correctAnswer ? 'Correct' : 'Incorrect'}</div>);
}

CorrectChoice.propTypes = {
    correctAnswer: PropTypes.string,
    checkedValue: PropTypes.string
};

export default CorrectChoice;
