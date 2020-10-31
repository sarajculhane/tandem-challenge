import React, {useState} from 'react'
import QuestionCard from './QuestionCard'

const QuestionList = (props) => {
    const {questions} = props
    let i = 0
    const [currentQuestion, setQuestion] = useState(questions[i])
    const [currentIdx, setIdx] = useState(i)
    
    const handleClick = () => {
        event.preventDefault()
        if(i < questions.length) {
            i++ 
            setQuestion(questions[i])
            setIdx(i)
        }

    }
    return (
        
        <div>
            <QuestionCard question={currentQuestion} handleClick={handleClick} idx={currentIdx} />
        </div>
    )
}


export default QuestionList