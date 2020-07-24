import React, { Component } from 'react';
import SelectScene from '../GameScenes/SelectScene/SelectScene';
import ResultsScene from '../GameScenes/ResultsScene/ResultsScene';
import './Game.css';

class Game extends Component {
    
    constructor() {
        super();
        this.state = {
            playerOption: '',
            computerOption: ''
        };
        this.setPlayerOption = this.setPlayerOption.bind(this);
        this.resetGameState = this.resetGameState.bind(this);
    }

    generateComputerOption() {
        const options = [
            "rock",
            "paper",
            "scissors"
        ];
        const randomIndex = Math.floor(Math.random() * 3);
        return options[randomIndex];
    }

    setPlayerOption(chosenOption) {
        this.setState({
            playerOption: chosenOption,
            computerOption: this.generateComputerOption()
        });
    }

    resetGameState() {
        this.setState({
            playerOption: '',
            computerOption: ''
        })
    }


    render() {
        return (
            <div className='game-container'>
                { this.state.playerOption === ''
                   ? <SelectScene setPlayerOption={this.setPlayerOption}/>
                   : <ResultsScene playerOption={this.state.playerOption} computerOption={this.state.computerOption} setPlayerOption={this.setPlayerOption} resetGameState={this.resetGameState}/>
                }
            </div>
        );
    }
}

export default Game;
