import React from 'react' 

const Scoreboard = (props) => {
    const {score, current} = props

    return (
        <div className="card">
        <div className="card-header">
        Trivia Night: 10 Questions
        </div>
        <div className="card-body">
            <h5 className="card-title"> Question {current} out of 10</h5>
            <p className="card-text"> Your current score is {score}! </p>
        </div>
</div>
    )
}

export default Scoreboard