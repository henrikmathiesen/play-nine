import React, { Component } from 'react';
import StarsFrame from '../../components/starsFrame/StarsFrame';
import ButtonFrame from '../../components/buttonFrame/ButtonFrame';
import AnswerFrame from '../../components/answerFrame/AnswerFrame';
import NumbersFrame from '../../components/numbersFrame/NumbersFrame';

class Game extends Component {
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
                        <AnswerFrame />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <NumbersFrame />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;