import React, { Component } from 'react';
import './answer-frame.css';

class AnswerFrame extends Component {
    render() {

        let numbers = [];

        for (var index = 0; index < this.props.selectedNumbers.length; index++) {
            numbers.push(<div key={index} className="number">{this.props.selectedNumbers[index]}</div>);
        }

        return(
            <div id="answer-frame" className="well well-lg">
                {numbers}
            </div>
        );
    }
}

export default AnswerFrame;