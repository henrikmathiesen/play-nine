import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="row">
                <div className="col-md-12 text-center">
                    <h1>Play Nine</h1>
                </div>
            </header>
        );
    }
}

export default Header;