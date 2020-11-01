import React, {useState} from 'react'
import PlayAgain from './PlayAgain'
import Scoreboard from './Scoreboard'

const Game = (props) => {
    const {questions} = props
    const [currentIdx, setIdx] = useState(1)
    const [currentQuestion, setQuestion] = useState(questions[0])
    const [prevQuestion, setPrev] = useState(questions[currentIdx - 1])
    const [selected, setSelected] = useState(false)
    const [target, setTarget] = useState(1000)
    const [result, setResult] = useState('')

    const [score, setScore] = useState(0)

    // The reset function is used to allow a user to reset their results at any point during the game 
    // OR to replay upon completion
    const reset = () => {
        setIdx(1)
        setQuestion(questions[0])
        setScore(0)
        setResult('')
        setTarget(1000)
    }

    // When the user selects a value, we set the selected state to be true (button no longer disabled)
    // Then, we set the target value based on the users current selection, which is the index of the item within the choices array 

    const handleSelect = () => {
        setSelected(true)
        setTarget(event.target.value)
    }
    

    /* When a user submits their response and moves to next question, the following happens:
    First, we check to see if the select was the correct answer (check for object as only the correct answer is an object)
    If it is, we increase our score by 1 and set the result to "correct" so that it renders the desried message

    Otherwise we set to incorrect

    Second, we check to see if there are questions left in our set of questions,
    If not, we set the length to be greater than the length of questions which will effectively terminate the game

    */

    const handleClick = () => {
        event.preventDefault()
        if(typeof currentQuestion.choices[target] === 'object') {
            setScore(prev => prev + 1)
            setResult('correct')
        } else {
            setResult('incorrect')
        }
        if(questions[currentIdx]  && currentIdx < questions.length) {
            setQuestion(questions[currentIdx])
            setIdx(currentIdx + 1)
            setPrev(questions[currentIdx-1])
        }
        else {
            setIdx(questions.length + 1)
        }
    }
    return (
        
        <div>
            <Scoreboard score={score} current={currentIdx}/>
        <div id="game">
            {currentIdx === questions.length + 1 ?
        <div>
            <PlayAgain replay={reset} score={score}/>
        </div>
          :

        <div className="card" style={{width: 40 + 'rem'}}>
          <div className="card-body">
            <h5 className="card-title text-center">Question {currentIdx}</h5>
            <p className="card-text text-center" color='black'>{currentQuestion.question}</p>
          </div>
   
          <div className="card-body cb-pad">
            <form>
            <ul className="list-group list-group-flush">
                {currentQuestion.choices.map((choice, idx) => {
    
                    return(
                        <div>
                    
                    
                    <li className="list-group-item">
                    <input className="form-check-input in-sp" type="radio" name="exampleRadios" id="exampleRadios1" onChange={handleSelect} value={idx}></input>
                        <div className="pad">{typeof choice === 'string' ? choice : choice.correct}</div></li>
                    </div>
                    
                    )
                })}
                

          </ul>
            <button type="submit" className="btn btn-primary btn-space" onClick={reset}>Reset</button>
            {target !== 1000 ? <button type="submit" className="btn btn-primary btn-space" onClick={handleClick}>Next</button>  :
            <button type="submit" className="btn btn-primary btn-space" onClick={handleClick} disabled>Next</button> }
            {result === '' ? <div></div> :
            
            result === 'correct' ? <div className="alert alert-success">You are correct!</div> : 
            <div className="alert alert-danger">Sorry incorrect. The correct answer was {prevQuestion.correct}</div>
        
}
            </form>
          </div>
        </div> 
}
</div>
        </div>
    )
        

}




export default Game