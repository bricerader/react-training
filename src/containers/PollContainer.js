import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButton from '../components/RadioButton';
import PollSubmitButton from '../components/PollSubmitButton';

class PollContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            header: 'Welcome to the Poll!',
            question: 'Who is the biggest bish?',
            answer1: 'Graham',
            answer2: 'Definitely Graham',
            answer3: 'Most definitely Graham',
            correctAnswer: 'Most definitely Graham'
        };
    }

    render() {
        let rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header}/>
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form>
                            <PollQuestion text={this.state.question}/>
                            <RadioButton text={this.state.answer1}/>
                            <RadioButton text={this.state.answer2}/>
                            <RadioButton text={this.state.answer3}/>
                            <PollSubmitButton/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;