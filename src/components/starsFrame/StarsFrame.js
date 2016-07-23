import React, { Component } from 'react';
import _ from 'underscore';
import './stars-frame.css';

class StarsFrame extends Component {
    render() {
        let numberOfStars = _.random(1, 9);
        let stars = [];

        for (var index = 0; index < numberOfStars; index++) {
            stars.push(<span key={index} className="glyphicon glyphicon-star"></span>);
        }

        return(
            <div id="stars-frame" className="well well-lg">
                {stars}
            </div>
        );
    }
}

export default StarsFrame;