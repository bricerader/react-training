import React from 'react';
import PropTypes from 'prop-types';


function PollQuestion(props) {
    return (<h2>{props.text}</h2>);
}

PollQuestion.propTypes = {
    text: PropTypes.string
};

export default PollQuestion;
