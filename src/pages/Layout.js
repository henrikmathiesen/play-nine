import React, { Component } from 'react';
import Header from '../components/header/Header';
import RulesAlert from '../components/rulesAlert/RulesAlert';
import Game from './game/Game';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RulesAlert />
        <Game />
      </div>
    );
  }
}

export default Layout;