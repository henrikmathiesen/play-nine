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
        this.handlecheckAnswer = this.handlecheckAnswer.bind(this);
        this.handleAcceptAnswer = this.handleAcceptAnswer.bind(this);
        this.handleRedraw = this.handleRedraw.bind(this);

        this.state = {
            numberOfStars: _.random(1, 9),
            selectedNumbers: [],
            usedNumbers: [],
            correct: null
        };
    }

    handleSelectNumber(selectedNumber) {
        if (this.state.selectedNumbers.indexOf(selectedNumber) < 0 && this.state.usedNumbers.indexOf(selectedNumber) < 0) {
            // selectedNumber is not in selectedNumbers or usedNumbers, ok to select it
            this.setState({
                selectedNumbers: this.state.selectedNumbers.concat(selectedNumber),
                correct: null
            });
        }
    }

    handleUnSelectNumber(unSelectedNumber) {
        var selectedNumbersCopy = this.state.selectedNumbers;
        var unSelectedNumberIndex = selectedNumbersCopy.indexOf(unSelectedNumber);
        selectedNumbersCopy.splice(unSelectedNumberIndex, 1);

        this.setState({
            selectedNumbers: selectedNumbersCopy,
            correct: null
        });
    }

    handlecheckAnswer() {
        var selectedNumbersSum = 0;
        for (var index = 0; index < this.state.selectedNumbers.length; index++) {
            selectedNumbersSum += this.state.selectedNumbers[index];
        }

        var correct = selectedNumbersSum === this.state.numberOfStars;
        this.setState({ correct: correct });
    }

    handleAcceptAnswer() {
        var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);

        this.setState({
            numberOfStars: _.random(1, 9),
            selectedNumbers: [],
            usedNumbers: usedNumbers,
            correct: null
        });
    }

    handleRedraw() {
        this.setState({
            numberOfStars: _.random(1, 9),
            correct: null,
            selectedNumbers: []
        });
    }

    render() {
        let selectedNumbers = this.state.selectedNumbers;
        let usedNumbers = this.state.usedNumbers;
        let numberOfStars = this.state.numberOfStars;
        let correct = this.state.correct;

        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <StarsFrame numberOfStars={numberOfStars} />
                    </div>
                    <div className="col-md-2">
                        <ButtonFrame selectedNumbers={selectedNumbers} correct={correct} onCheckAnswer={this.handlecheckAnswer} onAcceptAnswer={this.handleAcceptAnswer} onRedraw={this.handleRedraw} />
                    </div>
                    <div className="col-md-5">
                        <AnswerFrame selectedNumbers={selectedNumbers} onUnSelectNumber={this.handleUnSelectNumber} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <NumbersFrame selectedNumbers={selectedNumbers} usedNumbers={usedNumbers} onSelectNumber={this.handleSelectNumber} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;