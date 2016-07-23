import React, { Component } from 'react';
import './button-frame.css';

class ButtonFrame extends Component {
    render() {
        let isDisabled = this.props.selectedNumbers.length < 1; 

        return (
            <button id="button-frame" className="btn btn-primary btn-block" disabled={isDisabled}>=</button>
        );
    }
}

export default ButtonFrame;