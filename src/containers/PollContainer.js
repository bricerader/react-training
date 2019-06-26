import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollSubmitButton from '../components/PollSubmitButton';
import RadioButtonGroup from '../components/RadioButtonGroup';
import CurrentChoice from '../components/CurrentChoice';
import $ from 'jquery';
import CorrectChoice from '../components/CorrectChoice';

class PollContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            header: '',
            question: '',
            correctAnswer: '',
            choices: [],
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

    UNSAFE_componentWillMount() {
        console.log('componentWillMount()');
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8080/data/data.json', function (result) {
            var data = result;
            this.setState({
                header: data.poll.header,
                question: data.poll.questions[0].question,
                choices: data.poll.questions[0].choices,
                correctAnswer: data.poll.questions[0].correctAnswer
            });
        }.bind(this));
    }
    UNSAFE_componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate()');
        // this.checkAnswer(this.state.checkedValue);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
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
                            <RadioButtonGroup
                                name='answer'
                                checkedValue={this.state.checkedValue}
                                choices={this.state.choices}
                                onChange={this.setCheckedValue}
                            />
                            <PollSubmitButton/>
                            <CurrentChoice checkedValue={this.state.checkedValue}/>
                            <CorrectChoice checkedValue={this.state.checkedValue}
                                           correctAnswer={this.state.correctAnswer}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;