import React, { Component } from 'react';
import GameOption from '../../GameOption/GameOption';
import './ResultsScene.css';

class ResultsScene extends Component {

    getWinner() {
        if (this.props.playerOption === this.props.computerOption) {
            return `It's a tie!`;
        } else {
            if (this.props.playerOption === 'rock') {
                return (this.props.computerOption === 'scissors') ? 'You win!' : 'You lose!';
            } else if (this.props.playerOption === 'paper') {
                return (this.props.computerOption === 'rock') ? 'You win!' : 'You lose!';
            } else {
                return (this.props.computerOption === 'paper') ? 'You win!' : 'You lose!';
            }
        }
    }

    render() {
        return (
            <>
                <div className='results-titles-container'>
                    <h1>{this.getWinner()}</h1>
                </div>
                <div className='results-options-container'>
                    <GameOption type={this.props.playerOption}/>
                    <GameOption type={this.props.computerOption} computer/>
                </div>
                <button className='results-reset-button' onClick={this.props.resetGameState}>Play again</button>
            </>
        );
    }
}

export default ResultsScene;
