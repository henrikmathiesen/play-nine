import React, { Component } from 'react';
import './numbers-frame.css';

class NumbersFrame extends Component { 
    render(){
        return(
            <div id="numbers-frame" className="well well-lg">
                <div className="number">1</div>
                <div className="number">2</div>
                <div className="number">3</div>
            </div>
        );
    }
}

export default NumbersFrame;