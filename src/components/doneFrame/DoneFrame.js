import React, { Component } from 'react';

class DoneFrame extends Component {
    render(){
        return(
            <div id="done-frame" className="well well-lg text-center">
                <strong>{this.props.doneStatus}</strong>
            </div>
        );
    }
}

export default DoneFrame;