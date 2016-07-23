import React, { Component } from 'react';
import './layout.css';
import Header from '../components/header/Header';


class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Header />
                <div>
                    <h2>Test</h2>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Layout;