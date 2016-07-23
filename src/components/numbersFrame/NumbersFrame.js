import React, { Component } from 'react';
import './numbers-frame.css';

class NumbersFrame extends Component { 

    render(){
        let numbers = [];

        for (var index = 1; index <= 9; index++) {
            let className = 'number';

            if(this.props.selectedNumbers.indexOf(index) > -1 ) {
                className += ' selected'
            }
            
            numbers.push(<div key={index} className={className} onClick={this.props.onSelectNumber.bind(null, index)}>{index}</div>);
        }

        return(
            <div id="numbers-frame" className="well well-lg text-center">
                {numbers}
            </div>
        );
    }
}

export default NumbersFrame;

// onClick={ this.props.selectNumber.bind(null, i) }