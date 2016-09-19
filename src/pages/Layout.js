import React, { Component } from 'react';
import Header from '../components/header/Header';
import RulesAlert from '../components/rulesAlert/RulesAlert';
import LeaderBoardAlert from '../components/leaderBoardAlert/LeaderBoardAlert';
import Game from './game/Game';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-9">
            <RulesAlert />
          </div>
          <div className="col-md-3">
            <LeaderBoardAlert />
          </div>
        </div>
        <Game />
      </div>
    );
  }
}

export default Layout;