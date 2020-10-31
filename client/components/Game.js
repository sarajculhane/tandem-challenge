import React, {useState} from 'react'
import PlayAgain from './PlayAgain'
import Scoreboard from './Scoreboard'

const Game = (props) => {
    const {questions} = props
    const [currentIdx, setIdx] = useState(1)
    const [currentQuestion, setQuestion] = useState(questions[0])
    const [prevQuestion, setPrev] = useState(questions[currentIdx - 1])
    const [selected, setSelected] = useState(false)
    const [target, setTarget] = useState(0)
    const [result, setResult] = useState('')

    const [score, setScore] = useState(0)


    const reset = () => {
        setIdx(1)
        setQuestion(questions[0])
        setScore(0)
        setResult(false)
    }

    const handleSelect = () => {
        console.log(event.target.value, 'the target val')
        setSelected(true)
        setTarget(event.target.value)
    }

    const handleClick = () => {
        event.preventDefault()
        console.log(currentQuestion.choices[target])
        if(typeof currentQuestion.choices[target] === 'object') {
            setScore(prev => prev + 1)
            setResult('correct')
        } else {

        
            setResult(false)
        }
        if(questions[currentIdx]  && currentIdx < questions.length) {
            setQuestion(questions[currentIdx])
            setIdx(currentIdx + 1)
            setPrev(questions[currentIdx-1])
        }
        else {
            setIdx(questions.length + 1)
            // console.log('game over')
        }
    }
    console.log(questions)
    return (
        
        <div>
            <Scoreboard score={score} current={currentIdx}/>
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
            {result === '' ? <div></div> :
            
            result === 'correct' ? <div className="alert alert-success">You are correct!</div> : 
            <div className="alert alert-danger">Sorry incorrect. The correct answer was {prevQuestion.correct}</div>
        
}
            </form>
          </div>
        </div> 
}
        </div>
    )
        

}




export default Game