import React, { Component } from 'react';
import RulesAlert from './rulesAlert/RulesAlert';
import LeaderBoardAlert from './leaderBoardAlert/LeaderBoardAlert';

class Alerts extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-9">
                    <RulesAlert />
                </div>
                <div className="col-md-3">
                    <LeaderBoardAlert />
                </div>
            </div>
        );
    }

}

export default Alerts;