import React, { Component } from 'react';
import StarsFrame from '../../components/starsFrame/StarsFrame';
import ButtonFrame from '../../components/buttonFrame/ButtonFrame';
import AnswerFrame from '../../components/answerFrame/AnswerFrame';
import NumbersFrame from '../../components/numbersFrame/NumbersFrame';

class Game extends Component {

    constructor() {
        super();

        this.handleSelectNumber = this.handleSelectNumber.bind(this);

        this.state = {
            selectedNumbers: []
        };
    }

    handleSelectNumber(selectedNumber){
        this.setState({ selectedNumbers: this.state.selectedNumbers.concat(selectedNumber) });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <StarsFrame />
                    </div>
                    <div className="col-md-2">
                        <ButtonFrame />
                    </div>
                    <div className="col-md-5">
                        <AnswerFrame selectedNumbers={this.state.selectedNumbers} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <NumbersFrame selectedNumbers={this.state.selectedNumbers} onSelectNumber={this.handleSelectNumber} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;