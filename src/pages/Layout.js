import React, { Component } from 'react';
import Header from '../components/header/Header';
import RulesAlert from '../components/rulesAlert/RulesAlert';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RulesAlert />
      </div>
    );
  }
}

export default Layout;