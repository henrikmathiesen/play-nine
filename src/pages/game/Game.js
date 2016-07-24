import React, { Component } from 'react';
import Utils from '../../utils/Utils';
import StarsFrame from '../../components/starsFrame/StarsFrame';
import ButtonFrame from '../../components/buttonFrame/ButtonFrame';
import AnswerFrame from '../../components/answerFrame/AnswerFrame';
import NumbersFrame from '../../components/numbersFrame/NumbersFrame';
import DoneFrame from '../../components/doneFrame/DoneFrame';
import './game.css';

class Game extends Component {

    constructor() {
        super();

        this.handleSelectNumber = this.handleSelectNumber.bind(this);
        this.handleUnSelectNumber = this.handleUnSelectNumber.bind(this);
        this.handlecheckAnswer = this.handlecheckAnswer.bind(this);
        this.handleAcceptAnswer = this.handleAcceptAnswer.bind(this);
        this.handleRedraw = this.handleRedraw.bind(this);
        this.updateDoneStatus = this.updateDoneStatus.bind(this);
        this.handleResetGame = this.handleResetGame.bind(this);

        this.state = {
            numberOfStars: Utils.randomNumber(),
            selectedNumbers: [],
            usedNumbers: [],
            correct: null,
            redrawCount: 5,
            doneStatus: null
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
        let selectedNumbersCopy = this.state.selectedNumbers;
        let unSelectedNumberIndex = selectedNumbersCopy.indexOf(unSelectedNumber);
        selectedNumbersCopy.splice(unSelectedNumberIndex, 1);

        this.setState({
            selectedNumbers: selectedNumbersCopy,
            correct: null
        });
    }

    handlecheckAnswer() {
        let selectedNumbersSum = 0;
        for (let index = 0; index < this.state.selectedNumbers.length; index++) {
            selectedNumbersSum += this.state.selectedNumbers[index];
        }

        let correct = selectedNumbersSum === this.state.numberOfStars;
        this.setState({ correct: correct });
    }

    handleAcceptAnswer() {
        let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);

        this.setState({
            numberOfStars: Utils.randomNumber(),
            selectedNumbers: [],
            usedNumbers: usedNumbers,
            correct: null
        }, this.updateDoneStatus);
    }

    handleRedraw() {
        let redrawCount = this.state.redrawCount;

        if ((redrawCount > 0) && (this.state.doneStatus === null)) {
            this.setState({
                numberOfStars: Utils.randomNumber(),
                correct: null,
                selectedNumbers: [],
                redrawCount: redrawCount - 1
            }, this.updateDoneStatus);
        }
    }

    possibleSolutions() {
        let numberOfStars = this.state.numberOfStars;
        let usedNumbers = this.state.usedNumbers;
        let possibleNumbers = [];

        // If number is not in usedNumbers then it is a possible number
        for (let index = 1; index <= 9; index++) {
            if (usedNumbers.indexOf(index) < 0) {
                possibleNumbers.push(index);
            }
        }

        return Utils.possibleCombinationSum(possibleNumbers, numberOfStars);
    }

    updateDoneStatus() {
        if (this.state.usedNumbers.length === 9) {
            this.setState({
                doneStatus: "You Won!"
            });
        }
        else if (this.state.redrawCount === 0 && !this.possibleSolutions()) {
            this.setState({
                doneStatus: "You Lose!"
            });
        }
    }

    handleResetGame() {
        this.setState({
            numberOfStars: Utils.randomNumber(),
            selectedNumbers: [],
            usedNumbers: [],
            correct: null,
            redrawCount: 5,
            doneStatus: null
        });
    }

    render() {
        let selectedNumbers = this.state.selectedNumbers;
        let usedNumbers = this.state.usedNumbers;
        let numberOfStars = this.state.numberOfStars;
        let correct = this.state.correct;
        let redrawCount = this.state.redrawCount;
        let doneStatus = this.state.doneStatus;

        let bottomFrame = (doneStatus === null) ?
            (<NumbersFrame selectedNumbers={selectedNumbers} usedNumbers={usedNumbers} onSelectNumber={this.handleSelectNumber} />) :
            (<DoneFrame doneStatus={doneStatus} onResetGame={this.handleResetGame} />);

        return (
            <div>
                <div className="row">
                    <div className="col-md-5">
                        <StarsFrame numberOfStars={numberOfStars} />
                    </div>
                    <div className="col-md-2">
                        <ButtonFrame selectedNumbers={selectedNumbers} correct={correct} onCheckAnswer={this.handlecheckAnswer} onAcceptAnswer={this.handleAcceptAnswer} onRedraw={this.handleRedraw} redrawCount={redrawCount} doneStatus={doneStatus} />
                    </div>
                    <div className="col-md-5">
                        <AnswerFrame selectedNumbers={selectedNumbers} onUnSelectNumber={this.handleUnSelectNumber} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 bottom-frame">
                        {bottomFrame}
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;