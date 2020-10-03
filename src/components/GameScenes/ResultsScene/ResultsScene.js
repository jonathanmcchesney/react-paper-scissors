import React, { Component } from 'react';
import GameOption from '../../GameOption';

class ResultsScene extends Component {
    constructor() {
        super();
        this.state = {
            result: ''
        };
    }

    componentDidMount() {
        if (this.props?.playerOption === this.props?.computerOption) {
            this.props.updateScore({ isDraw: true })
            this.setState({result: `It's a tie!`});
        } else {
            if (this.props?.playerOption === 'rock') {
                const isWin = this.props?.computerOption === 'scissors';
                this.props.updateScore({ isWin, isLoss: !isWin })
                this.setState({ result: isWin ? 'You win!' : 'You lose!' });
            } else if (this.props?.playerOption === 'paper') {
                const isWin = this.props?.computerOption === 'rock';
                this.props.updateScore({ isWin, isLoss: !isWin })
                this.setState({ result: isWin ? 'You win!' : 'You lose!' });
            } else {
                const isWin = this.props?.computerOption === 'paper';
                this.props.updateScore({ isWin, isLoss: !isWin })
                this.setState({ result: isWin ? 'You win!' : 'You lose!'});
            }
        }
    }

    render() {
        return (
            <>
                <div className='results-titles-container'>
                    <h1>{this.state.result}</h1>
                </div>
                <div className='results-options-container'>
                    <GameOption type={this.props?.playerOption}/>
                    <GameOption type={this.props?.computerOption} computer/>
                </div>
                <button className='results-reset-button' onClick={this.props?.resetGameState}>Play again</button>
            </>
        );
    }
}

export default ResultsScene;
