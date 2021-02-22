import React, { Component } from 'react';
import './answer-frame.css';

class AnswerFrame extends Component {
    render() {

        let numbers = [];

        for (var index = 0; index < this.props.selectedNumbers.length; index++) {
            numbers.push(<div key={index} className="number"
                onClick={this.props.onUnSelectNumber.bind(null, this.props.selectedNumbers[index])}>
                {this.props.selectedNumbers[index]}
            </div>);
        }

        // Not optimal using id as css scoping, since id:s should be unique, and components can be reused (in the same view)
        return (
            <div id="answer-frame" className="well well-lg">
                {numbers}
            </div>
        );
    }
}

export default AnswerFrame;
