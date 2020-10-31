import React, {useState} from 'react'

const QuestionList = (props) => {
    const {questions} = props
    const [currentIdx, setIdx] = useState(1)
    const [currentQuestion, setQuestion] = useState(questions[0])
    console.log(questions, currentIdx, currentQuestion)
    
    const reset = () => {
        setIdx(1)
        setQuestion(questions[0])
    }

    const handleClick = () => {
        event.preventDefault()
        
        if(questions[currentIdx]  && currentIdx < questions.length) {
            setQuestion(questions[currentIdx])
            setIdx(currentIdx + 1)
            
            
        }
        else {
            setIdx(questions.length + 1)
            // console.log('game over')
        }
    }

    return (
        
        <div>
            {currentIdx === questions.length + 1 ?
        <div>
            <PlayAgain replay={reset} />
        </div>
          :

        <div className="card" style={{width: 18 + 'rem'}}>
          <div className="card-body">
            <h5 className="card-title">Question {currentIdx}</h5>
            <p className="card-text" color='black'>{currentQuestion.question}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <form>
            <button type="submit" className="btn btn-primary" onClick={reset}>Reset</button>
              <button type="submit" className="btn btn-primary" onClick={handleClick}>Next</button>
            </form>
          </div>
        </div> 
}
        </div>
    )
        

}

export const PlayAgain = (props) => {
    const {replay} = props
    return (
        <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
            <h5 className="card-title">Do you want to play again?</h5>
            <p className="card-text" color='black'>
                <button type="submit" className="btn btn-primary" onClick={replay}>Play Again</button>
            </p>
</div>
</div>
    )
}


export default QuestionList