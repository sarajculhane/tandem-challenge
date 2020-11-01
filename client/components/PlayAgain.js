import React from 'react'

 const PlayAgain = (props) => {
    const {replay, score} = props
    return (
        <div className="card" style={{width: 40 + 'rem'}}>
        <div className="card-body">
            <h3 className="card-title text-center primary">Your score was {score}</h3>
            <h5 className="card-title text-center">Do you want to play again?</h5>
            <p className="card-text text-center" color='black'>
                <button type="submit" className="btn btn-primary" onClick={replay}>Play Again</button>
            </p>
</div>
</div>
    )
}

export default PlayAgain