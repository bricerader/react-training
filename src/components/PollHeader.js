import React from 'react';

class PollHeader extends React.Component {
    render() {
        return (
            <div className="text-center"><h1>{this.props.text}</h1></div>
        );
    }
}

export default PollHeader;