import React, { Component } from 'react';
import './button-frame.css';

class ButtonFrame extends Component {
    render() {
        let button;
        let isDisabled;

        switch (this.props.correct) {
            case true:
                button = <button id="button-frame" className="btn btn-success btn-block"><span className="glyphicon glyphicon-ok"></span></button>
                break;
            case false:
                button = <button id="button-frame" className="btn btn-danger btn-block"><span className="glyphicon glyphicon-remove"></span></button>
                break;
            default:
                isDisabled = this.props.selectedNumbers.length < 1;
                button = <button id="button-frame" className="btn btn-warning btn-block" disabled={isDisabled} onClick={this.props.onCheckAnswer}>=</button>; 
                break;
        } 

        return (
            <span>
                {button}
            </span>
        );
    }
}

export default ButtonFrame;