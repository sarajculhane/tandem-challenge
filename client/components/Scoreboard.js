import React from 'react' 

const Scoreboard = (props) => {
    const {score, current} = props

    return (
        <div className="card">
        <div className="card-header text-center">
        <h4>Trivia Night: 10 Questions</h4>
        </div>
        <div className="card-body">
            <h6 className="card-title text-center"> {current < 11 ? <div>Question {current} out of 10 
            <p className="card-text text-center"> Your current score is {score}. </p>
            </div>
            : 
            
            <div>No more questions left</div>}</h6>
            
        </div>
</div>
    )
}

export default Scoreboard