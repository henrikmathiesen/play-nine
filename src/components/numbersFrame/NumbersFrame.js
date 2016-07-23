import React, { Component } from 'react';
import './numbers-frame.css';

class NumbersFrame extends Component { 
    render(){
        let numbers = [];

        for (var index = 1; index <= 9; index++) {
            numbers.push(<div key={index} className="number">{index}</div>);
        }

        return(
            <div id="numbers-frame" className="well well-lg text-center">
                {numbers}
            </div>
        );
    }
}

export default NumbersFrame;