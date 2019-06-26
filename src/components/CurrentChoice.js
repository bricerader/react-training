import React from 'react';
import PropTypes from 'prop-types';

function CurrentChoice(props) {
    return (<div>Current selection: {props.checked}</div>);
}

CurrentChoice.propTypes = {
    checkedValue: PropTypes.string
};

export default CurrentChoice;
