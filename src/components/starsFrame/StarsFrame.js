import React, { Component } from 'react';
import './starsFrame.css';

class StarsFrame extends Component {
    render() {
        return(
            <div id="stars-frame" className="well well-lg">
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
            </div>
        );
    }
}

export default StarsFrame;