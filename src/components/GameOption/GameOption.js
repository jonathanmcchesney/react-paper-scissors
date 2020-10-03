import React, { Component } from 'react';

class GameOption extends Component {
    
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    getOptionEmoji () {
        if (this.props?.type === 'rock') {
            return '✊';
        } else if (this.props?.type === 'paper') {
            return '🤚';
        } else {
            return '✌️';
        }
    }

    handleClick(e) {
        this.props.setPlayerOption(e.target.value);
    }

    render () {
        const emoji = this.getOptionEmoji();

        if (this.props?.showButton) {
            return (
                <div className='option-container'>
                    <span role='img' aria-label={this.props?.type} className='option-emoji'>{emoji}</span>
                    <button className='option-button' value={this.props?.type} onClick={this.handleClick}>Choose {this.props?.type}</button>
                </div>
            )
        } else {
            return (
                <div className='option-container'>
                    <span role='img' aria-label={this.props?.type} className='option-emoji'>{emoji}</span>
                    { this.props?.computer 
                        ? <span className='option-choice-label'>Computer chose {this.props?.type}</span>
                        : <span className='option-choice-label'>You chose {this.props?.type}</span>
                    }
                </div>
            );
        }
    }
}

export default GameOption;
