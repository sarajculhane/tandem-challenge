import React, {useState} from 'react'
import QuestionCard from './QuestionCard'
// import QuestionCard from './QuestionCard'

const QuestionList = (props) => {
    const {questions} = props
    const [currentIdx, setIdx] = useState(1)
    const [currentQuestion, setQuestion] = useState(questions[0])
    console.log(questions, currentIdx, currentQuestion)
    const handleClick = () => {
        event.preventDefault()
        
        if(questions[currentIdx]  && currentIdx <= questions.length) {
            
            console.log(currentIdx)
            setQuestion(questions[currentIdx])
            setIdx(currentIdx + 1)
            
            
        }
        if(currentIdx > questions.length) {
            // return (
            //     <div>Game Over</div>
            // )
            console.log('game over')
        }
    }

    return (
        
        <div>
        <div className="card" style={{width: 18 + 'rem'}}>
          <div className="card-body">
            <h5 className="card-title">Question {currentIdx+ 1}</h5>
            <p className="card-text" color='black'>{currentQuestion.question}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <form>
              <button type="submit" onClick={handleClick}>Next</button>
            </form>
          </div>
        </div> 
        </div>
    )
        

}


export default QuestionList