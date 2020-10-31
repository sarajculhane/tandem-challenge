import React from 'react'

const QuestionCard = (props) => {
    const {question, handleClick, idx} = props
    // const choices = {correct: question.correct, incorrect: question.incorrect}
    console.log(props)
    return (
        <div className="card" style={{width: 18 + 'rem'}}>
          <div className="card-body">
            <h5 className="card-title">Question {idx}</h5>
            <p className="card-text">{question.question}</p>
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
    )
}

export default QuestionCard