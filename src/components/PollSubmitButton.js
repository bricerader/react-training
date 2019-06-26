import React from 'react';

function PollSubmitButton(props) {
    return (
        <button className="btn btn-success" onClick={props.handleClick}>{props.text}</button>);
}

PollSubmitButton.defaultProps = {
    text: 'See who\'s the biggest bish'
};

export default PollSubmitButton;