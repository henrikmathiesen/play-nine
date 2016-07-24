import React, { Component } from 'react';
import './stars-frame.css';

class StarsFrame extends Component {
    render() {
        let stars = [];

        for (var index = 0; index < this.props.numberOfStars; index++) {
            stars.push(<span key={index} className="glyphicon glyphicon-star"></span>);
        }

        return(
            <div id="stars-frame" className="well well-lg">
                <div className="stars">
                    {stars}
                </div>
            </div>
        );
    }
}

export default StarsFrame;