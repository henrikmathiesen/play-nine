import React, { Component } from 'react';

class DoneFrame extends Component {
    render(){
        // Not optimal using id as css scoping, since id:s should be unique, and components can be reused (in the same view)
        return(
            <div id="done-frame" className="well well-lg text-center">
                <div>
                    <strong>{this.props.doneStatus}</strong>
                </div>
                <div>
                    <button className="btn btn-lg btn-info" onClick={this.props.onResetGame}>Play again?</button>
                </div>
            </div>
        );
    }
}

export default DoneFrame;
