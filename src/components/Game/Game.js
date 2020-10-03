import React, { Component } from 'react';
import SelectScene from '../GameScenes/SelectScene';
import ResultsScene from '../GameScenes/ResultsScene';
import LoadingScene from '../GameScenes/LoadingScene';
import Score from '../Score';
import ThemeToggle from '../ThemeToggle';

class Game extends Component {
    
    constructor() {
        super();
        this.state = {
            playerOption: '',
            computerOption: '',
            score: {
                wins: Number(localStorage.getItem('wins')) || 0,
                losses: Number(localStorage.getItem('losses')) || 0,
                draws: Number(localStorage.getItem('draws')) || 0,
            },
            showLoadingScene: false
        };
        this.flipShowLoadingScene = this.flipShowLoadingScene.bind(this);
        this.setPlayerOption = this.setPlayerOption.bind(this);
        this.resetGameState = this.resetGameState.bind(this);
        this.updateScore = this.updateScore.bind(this);
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
        this.setState(prevState => ({
            ...prevState,
            showLoadingScene: !prevState?.showLoadingScene,
        }));
    }

    setPlayerOption(chosenOption) {
        this.setState(prevState => ({
            ...prevState,
            playerOption: chosenOption,
            computerOption: this.generateComputerOption(),
        })) ;
        this.flipShowLoadingScene()
    }

    resetGameState() {
        this.setState(prevState => ({
            ...prevState,
            playerOption: '',
            computerOption: '',
            showLoadingScene: false
        }))
    }

    incrementValueOrUseCurrent(shouldIncrement, currentValue) {
        return shouldIncrement ? currentValue +1 : currentValue;
    }

    updateScore({isWin, isLoss, isDraw}) {
        const {wins, losses, draws} = this.state.score;
        const newScore = {
            wins: this.incrementValueOrUseCurrent(isWin, wins), 
            losses: this.incrementValueOrUseCurrent(isLoss, losses), 
            draws: this.incrementValueOrUseCurrent(isDraw, draws )
        }
        localStorage.setItem('wins', newScore.wins)
        localStorage.setItem('losses', newScore.losses)
        localStorage.setItem('draws', newScore.draws)
        this.setState(prevState => ({...prevState, score: newScore})); 
    }

    determineScene() {
        let sceneToDraw;

        if (this.state.showLoadingScene === true) {
            sceneToDraw = <LoadingScene flipShowLoadingScene={this.flipShowLoadingScene}/>
        } else {
            sceneToDraw = this.state.playerOption === '' 
                ? <SelectScene setPlayerOption={this.setPlayerOption}/>
                : <ResultsScene playerOption={this.state.playerOption} computerOption={this.state.computerOption} setPlayerOption={this.setPlayerOption} resetGameState={this.resetGameState} updateScore={this.updateScore}/>;
        }

        return sceneToDraw
    }

    render() {
        return (
            <div className='game-container'>
                <div className='header__container'>
                    <Score score={this.state.score} /> 
                    <ThemeToggle theme={this?.props?.theme} toggleTheme={this.props.toggleTheme} />
                </div>
                {this.determineScene()}
            </div>
        );
    }
}

export default Game;
