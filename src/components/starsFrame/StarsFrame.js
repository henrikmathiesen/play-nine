import React, { Component } from 'react';
import './stars-frame.css';

class StarsFrame extends Component {
    render() {
        let stars = [];

        for (var index = 0; index < this.props.numberOfStars; index++) {
            stars.push(<span key={index} className="glyphicon glyphicon-star"></span>);
        }

        // Not optimal using id as css scoping, since id:s should be unique, and components can be reused (in the same view)
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
