import React, { Component } from 'react';
import './button-frame.css';

class ButtonFrame extends Component {
    render() {
        let button;
        let isDisabled;

        switch (this.props.correct) {
            case true:
                button = <button className="btn btn-success btn-block" onClick={this.props.onAcceptAnswer}><span className="glyphicon glyphicon-ok"></span></button>
                break;
            case false:
                button = <button className="btn btn-danger btn-block"><span className="glyphicon glyphicon-remove"></span></button>
                break;
            default:
                isDisabled = this.props.selectedNumbers.length < 1;
                button = <button className="btn btn-primary btn-block" disabled={isDisabled} onClick={this.props.onCheckAnswer}>=</button>; 
                break;
        } 

        return (
            <div id="button-frame">
                <div className="buttons">
                    {button}
                    <button className="btn btn-warning btn-block" onClick={this.props.onRedraw}>
                        <span className="glyphicon glyphicon-refresh"></span>
                        <span className="redraws"> 1 / 5</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default ButtonFrame;