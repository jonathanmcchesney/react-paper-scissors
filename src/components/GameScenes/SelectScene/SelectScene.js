import React, { Component } from 'react';
import GameOption from '../../GameOption';

class SelectScene extends Component {
    
    constructor() {
        super();
        this.setPlayerOptionHandler = this.setPlayerOptionHandler.bind(this);
    }

    setPlayerOptionHandler(e) {
        this.props.setPlayerOption(e);
    }

    render() {
        return (
            <>
                <div className='select-titles-container'>
                    <h1>Rock Paper Scissors</h1>
                </div>
                <div className='select-options-container'>
                    <GameOption type='rock' showButton setPlayerOption={this.setPlayerOptionHandler}/>
                    <GameOption type='paper' showButton setPlayerOption={this.setPlayerOptionHandler}/>
                    <GameOption type='scissors' showButton setPlayerOption={this.setPlayerOptionHandler}/>
                </div>
            </>
        );
    }
}

export default SelectScene;
