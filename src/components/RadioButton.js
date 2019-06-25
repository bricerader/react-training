import React from 'react';

class RadioButton extends React.Component {
    render() {
        return (
            <div className="radio"><input type="radio" />{this.props.text}</div>
        );
    }
}

export default RadioButton;