import React from 'react';
import PropTypes from 'prop-types';

function PollHeader(props) {
    return (<div className="text-center"><h1>{props.text}</h1></div>);
}

PollHeader.propTypes = {
    text: PropTypes.string
};

export default PollHeader;
