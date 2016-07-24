import React, { Component } from 'react';

class DoneFrame extends Component {
    render(){
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