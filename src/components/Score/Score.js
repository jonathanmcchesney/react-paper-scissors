import React, { Component } from 'react';
import './Score.css';
import capitaliseString from '../../utils/capitaliseString'

class Score extends Component {

    renderScoreTable() {
        const scores = Object.keys(this.props.score).map(item => ({ header: item, value: this.props.score[item] || 0 }))
        return (
        <table className="score__table">
            <thead>    
                {scores.map((score, index) => <th className="score__table-header" key={`header_${index}`}>{capitaliseString(score.header)}</th>)}
            </thead>
            <tbody>
                {scores.map((score, index) => <td className="score__table-row" key={`value_${index}`}>{score.value}</td>)}
            </tbody>
        </table> 
      )
    }

    render() {
        return (
            <div className='score__container'>
                {this.renderScoreTable()}
            </div>
        );
    }
}

export default Score;
