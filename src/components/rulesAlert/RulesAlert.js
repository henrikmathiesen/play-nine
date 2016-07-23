import React, { Component } from 'react';
import './rulesAlert.css';

class RulesAlert extends Component {

    constructor(){
        super();

        this.handleClose = this.handleClose.bind(this);

        this.state = {
            isVisible: true
        }
    }

    handleCollapse(){
        this.setState({ isVisible: !this.state.isVisible });
    }

    render(){
        let alertClasses = 'alert alert-success alert-dismissible' + (!this.state.isVisible ? ' alert-collpase' : '');
        let buttonClasses = this.state.isVisible ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down'; 

        return(
            <div className={alertClasses}>
                <button type="button" className="close" onClick={this.handleCollapse}><span className={buttonClasses}></span></button>
                <div className="text-center">
                    <h2 className="text-uppercase"><strong>Rules</strong></h2>
                    <hr />
                </div>
                <div>
                    <p>
                        You get a random number of stars between 1 and 9.
                        And you have a set of numbers in the bottom frame that you can use.
                        You can select <em>one or more</em> numbers that sum up to the value of the random stars.
                    </p>
                    <p>
                        The objective is to use all the numbers in the bottom frame.
                        If you end up with a number of stars that have no possible correct combination, you can redraw up to 5 times.
                        Can you beat the game?
                    </p>
                </div>
            </div>
        );
    }
}

export default RulesAlert;