import React, { Component } from 'react';
import _ from 'underscore';
import StarsFrame from '../../components/starsFrame/StarsFrame';
import ButtonFrame from '../../components/buttonFrame/ButtonFrame';
import AnswerFrame from '../../components/answerFrame/AnswerFrame';
import NumbersFrame from '../../components/numbersFrame/NumbersFrame';

class Game extends Component {

    constructor() {
        super();

        this.handleSelectNumber = this.handleSelectNumber.bind(this);
        this.handleUnSelectNumber = this.handleUnSelectNumber.bind(this);

        this.state = {
            numberOfStars: _.random(1, 9),
            selectedNumbers: []
        };
    }

    handleSelectNumber(selectedNumber){
        if(this.state.selectedNumbers.indexOf(selectedNumber) < 0) {
            // selectedNumber is not in selectedNumbers, ok to select it
            this.setState({ selectedNumbers: this.state.selectedNumbers.concat(selectedNumber) });
        }
    }

    handleUnSelectNumber(unSelectedNumber) {
        var selectedNumbersCopy = this.state.selectedNumbers;
        var unSelectedNumberIndex = selectedNumbersCopy.indexOf(unSelectedNumber);
        selectedNumbersCopy.splice(unSelectedNumberIndex, 1);
        this.setState({ selectedNumbers: selectedNumbersCopy });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <StarsFrame numberOfStars={this.state.numberOfStars} />
                    </div>
                    <div className="col-md-2">
                        <ButtonFrame />
                    </div>
                    <div className="col-md-5">
                        <AnswerFrame selectedNumbers={this.state.selectedNumbers} onUnSelectNumber={this.handleUnSelectNumber} />
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