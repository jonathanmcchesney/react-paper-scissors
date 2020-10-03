import React, { Component } from 'react';

const optionStrings = ['ROCK!', 'PAPER!', 'SCISSORS!'];

class LoadingScene extends Component {

    constructor() {
        super();
        this.state = {
            optionsIndex: 0
        }
    }
    

    componentDidMount() {
        this.timeout = setInterval(() => {
            let newIndex = (this.state.optionsIndex) + 1;
            if (newIndex > optionStrings.length -1) {
                clearInterval(this.timeout);
                this.props.flipShowLoadingScene();
            }
            this.setState({
                optionsIndex: newIndex
            });
        }, 500);
    }

    render() {
        return (
            <>
                <div className='loading-titles-container'>
                    <h1>{optionStrings[this.state.optionsIndex]}</h1>
                </div>
                <div className='loading-emojis-container'>
                    <span role='img' aria-label='left-fist' className='fist-emoji left-fist'>🤜</span>
                    <span role='img' aria-label='right-fist' className='fist-emoji right-fist'>🤛</span>
                </div>
            </>
        );
    }
}

export default LoadingScene;
