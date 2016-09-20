import React, { Component } from 'react';
import Header from '../components/header/Header';
import Alerts from '../components/alerts/Alerts';
import Game from './game/Game';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Alerts />
        <Game />
      </div>
    );
  }
}

export default Layout;