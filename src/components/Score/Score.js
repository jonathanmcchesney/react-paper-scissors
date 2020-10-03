import React, { Component } from 'react';
import capitaliseString from '../../utils/capitaliseString'

class Score extends Component {

    renderScoreTable() {
        const scores = Object.keys(this.props?.score).map(item => ({ header: item, value: this.props?.score?.[item] || 0 }))
        return (
        <table className="score__table">
            <thead>    
                <tr>{scores.map((score, index) => <th className="score__table-header" key={`header_${index}`}>{capitaliseString(score?.header)}</th>)}</tr>
            </thead>
            <tbody>
                <tr>{scores.map((score, index) => <td className="score__table-row" key={`value_${index}`}>{score?.value}</td>)}</tr>
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
