import React, { Component } from 'react';
import SelectScene from '../GameScenes/SelectScene/SelectScene';
import ResultsScene from '../GameScenes/ResultsScene/ResultsScene';
import './Game.css';
import LoadingScene from '../GameScenes/LoadingScene/LoadingScene';

class Game extends Component {
    
    constructor() {
        super();
        this.state = {
            playerOption: '',
            computerOption: '',
            showLoadingScene: false
        };
        this.flipShowLoadingScene = this.flipShowLoadingScene.bind(this);
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

    flipShowLoadingScene() {
        this.setState({
            showLoadingScene: !this.state.showLoadingScene
        });
    }

    setPlayerOption(chosenOption) {
        this.setState({
            playerOption: chosenOption,
            computerOption: this.generateComputerOption(),
        });
        this.flipShowLoadingScene()
    }

    resetGameState() {
        this.setState({
            playerOption: '',
            computerOption: '',
            showLoadingScene: false
        })
    }

    determineScene() {
        let sceneToDraw;

        if (this.state.showLoadingScene === true) {
            sceneToDraw = <LoadingScene flipShowLoadingScene={this.flipShowLoadingScene}/>
        } else {
            sceneToDraw = this.state.playerOption === '' 
                ? <SelectScene setPlayerOption={this.setPlayerOption}/>
                : <ResultsScene playerOption={this.state.playerOption} computerOption={this.state.computerOption} setPlayerOption={this.setPlayerOption} resetGameState={this.resetGameState}/>;
        }

        return sceneToDraw
    }

    render() {
        return (
            <div className='game-container'>
                {this.determineScene()}
            </div>
        );
    }
}

export default Game;
