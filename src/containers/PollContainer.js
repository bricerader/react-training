import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';
import RadioButtonGroup from '../components/RadioButtonGroup';

class PollContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            header: 'Welcome to the Poll!',
            question: 'Who is the biggest bish?',
            correctAnswer: 'Most definitely Graham',
            checkedValue: ''
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value) {
        this.setState({
            checkedValue: value
        });
        console.log('current choice: ' + value);
    }

    render() {
        let rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        const choices = [
            {value: 'Brendan', label: 'Brendan'},
            {value: 'Graham', label: 'Graham'},
            {value: 'Mike', label: 'Mike'}
        ];

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header}/>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form>
                            <PollQuestion text={this.state.question}/>
                            <RadioButtonGroup
                                name='answer'
                                checkedValue={this.state.checkedValue}
                                choices={choices}
                                onChange={this.setCheckedValue}
                            />
                            <PollSubmitButton/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;