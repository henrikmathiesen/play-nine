import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        // Not optimal using id as css scoping, since id:s should be unique, and components can be reused (in the same view)
        return (
            <header id="header" className="row">
                <div className="col-md-12 text-center">
                    <h1>Play Nine</h1>
                </div>
            </header>
        );
    }
}

export default Header;
