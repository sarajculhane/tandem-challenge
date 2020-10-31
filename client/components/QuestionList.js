import React, {useState} from 'react'

const QuestionList = (props) => {
    const {questions} = props
    const [currentIdx, setIdx] = useState(1)
    const [currentQuestion, setQuestion] = useState(questions[0])
    const [selectedAnswer, setSelected] = useState('')
    const [score, setScore] = useState(0)

    const getChoices = (question) => {
        const choices = [{correct: question.correct}, ...question.incorrect]
        console.log(choices)
        const shuffle = (choices) => choices.sort(() => Math.random()- 0.5)
        return shuffle(choices)
    }
    const reset = () => {
        setIdx(1)
        setQuestion(questions[0])
    }

    const handleSelect = () => {
        console.log(event.target.value)
        setSelected(event.target.value)
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

    const choices = getChoices(currentQuestion)
    return (
        
        <div>
            {score}
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
   
          <div className="card-body">
            <form>
            <ul className="list-group list-group-flush">
                {choices.map((choice) => {
                    return(
                        <div>
                    
                    
                    <li className="list-group-item">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={handleSelect}
                    value={choice}></input>
                        {typeof choice === 'string' ? choice : choice.correct}</li>
                    </div>
                    
                    )
                })}
                

          </ul>
            <button type="submit" className="btn btn-primary" onClick={reset}>Reset</button>
             { selectedAnswer.length ?  <button type="submit" className="btn btn-primary" onClick={handleClick}>Next</button> :
                <button type="submit" className="btn btn-primary" onClick={handleClick} disabled>Next</button>}
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