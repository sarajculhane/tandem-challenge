import React, {useState} from 'react'

const QuestionList = (props) => {
    const {questions} = props
    const [currentIdx, setIdx] = useState(1)
    const [currentQuestion, setQuestion] = useState(questions[0])
    const [selected, setSelected] = useState(false)
    const [target, setTarget] = useState(0)

    const [score, setScore] = useState(0)


    const reset = () => {
        setIdx(1)
        setQuestion(questions[0])
    }

    const handleSelect = () => {
        // event.preventDefault()
        console.log(event.target.value, 'the target val')
        setSelected(true)
        setTarget(event.target.value)
        // setSelected(event.target.value)
    }

    const handleClick = () => {
        event.preventDefault()
        console.log(currentQuestion.choices[target])
        if(typeof currentQuestion.choices[target] === 'object') setScore(prev => prev + 1)
        if(questions[currentIdx]  && currentIdx < questions.length) {
            setQuestion(questions[currentIdx])
            setIdx(currentIdx + 1)
            setSelected(false)
        }
        else {
            setIdx(questions.length + 1)
            // console.log('game over')
        }
    }
    console.log(questions)
    return (
        
        <div>
            {score}
            {currentIdx === questions.length + 1 ?
        <div>
            <PlayAgain replay={reset} score={score}/>
        </div>
          :

        <div className="card" style={{width: 18 + 'rem'}}>
          <div className="card-body">
            <h5 className="card-title">Question {currentIdx}</h5>
            <p className="card-text" color='black'>{currentQuestion.question}</p>
          </div>
   
          <div className="card-body">
            <form>
            <ul className="list-group list-group-flush">
                {currentQuestion.choices.map((choice, idx) => {
    
                    return(
                        <div>
                    
                    
                    <li className="list-group-item">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={handleSelect} value={idx}></input>
                        {typeof choice === 'string' ? choice : choice.correct}</li>
                    </div>
                    
                    )
                })}
                

          </ul>
            <button type="submit" className="btn btn-primary" onClick={reset}>Reset</button>
            {selected ? <button type="submit" className="btn btn-primary" onClick={handleClick}>Next</button>  :
            <button type="submit" className="btn btn-primary" onClick={handleClick} disabled>Next</button> }
            </form>
          </div>
        </div> 
}
        </div>
    )
        

}

export const PlayAgain = (props) => {
    const {replay, score} = props
    return (
        <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-body">
            <h3 className="card-title">Your score was {score}</h3>
            <h5 className="card-title">Do you want to play again?</h5>
            <p className="card-text" color='black'>
                <button type="submit" className="btn btn-primary" onClick={replay}>Play Again</button>
            </p>
</div>
</div>
    )
}


export default QuestionList