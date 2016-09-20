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
        let buttonClasses = this.state.isVisible ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down';

        return (
            <div id="leader-board-alert" className={alertClasses}>
                <button type="button" className="close" onClick={this.handleCollapse}><span className={buttonClasses}></span></button>
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