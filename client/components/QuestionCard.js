import React from 'react'

const QuestionCard = (props) => {
    const {question, handleClick, idx} = props
    console.log(props)
    return (
        <div className="card" style={{width: 18 + 'rem'}}>
          <div className="card-body">
            <h5 className="card-title">Question number</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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