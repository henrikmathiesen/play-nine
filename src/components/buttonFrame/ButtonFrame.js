import React, { Component } from 'react';
import './button-frame.css';

class ButtonFrame extends Component {
    render() {
        let button;
        let checkButtonIsDisabled;
        let redrawButtonIsDisabled;

        switch (this.props.correct) {
            case true:
                button = <button className="btn btn-success btn-block" onClick={this.props.onAcceptAnswer}><span className="glyphicon glyphicon-ok"></span></button>
                break;
            case false:
                button = <button className="btn btn-danger btn-block"><span className="glyphicon glyphicon-remove"></span></button>
                break;
            default:
                checkButtonIsDisabled = this.props.selectedNumbers.length < 1;
                button = <button className="btn btn-primary btn-block" disabled={checkButtonIsDisabled} onClick={this.props.onCheckAnswer}>=</button>; 
                break;
        } 

        redrawButtonIsDisabled = this.props.redrawCount < 1;

        return (
            <div id="button-frame">
                <div className="buttons">
                    {button}
                    <button className="btn btn-warning btn-block" onClick={this.props.onRedraw} disabled={redrawButtonIsDisabled}>
                        <span className="glyphicon glyphicon-refresh"></span>
                        <span className="redraws"> {this.props.redrawCount} / 5</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default ButtonFrame;