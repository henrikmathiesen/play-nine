import React, { Component } from 'react';
import './leader-board-alert.css';

class LeaderBoardAlert extends Component {

    constructor() {
        super();

        this.handleCollapse = this.handleCollapse.bind(this);

        this.state = {
            isVisible: false
        };
    }

    handleCollapse() {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        let alertClasses = 'alert alert-warning alert-dismissible' + (!this.state.isVisible ? ' alert-collpase' : '');
        let buttonClasses = 'close glyphicon' + (this.state.isVisible ? ' glyphicon-chevron-up' : ' glyphicon-chevron-down');

        // Not optimal using id as css scoping, since id:s should be unique, and components can be reused (in the same view)
        return (
            <div id="leader-board-alert" className={alertClasses}>
                <span className={buttonClasses} onClick={this.handleCollapse}></span>
                <div className="text-center" onClick={this.handleCollapse}>
                    <h2 className="text-uppercase"><strong>Leader Board</strong></h2>
                    <hr />
                </div>
                <div>
                    <ul>
                        <li>1&nbsp;&nbsp;&nbsp;Henry</li>
                        <li>2&nbsp;&nbsp;&nbsp;Henry</li>
                        <li>3&nbsp;&nbsp;&nbsp;Henry</li>
                        <li>4&nbsp;&nbsp;&nbsp;Henry</li>
                        <li>5&nbsp;&nbsp;&nbsp;Henry</li>
                    </ul>
                </div>
            </div>
        );
    }

}
export default LeaderBoardAlert;
