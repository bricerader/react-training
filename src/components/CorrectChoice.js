import React from 'react';

function CorrectChoice(props) {
    return (<div>{props.checkedValue === props.correctAnswer ? 'Correct' : 'Incorrect'}</div>);
}

export default CorrectChoice;
