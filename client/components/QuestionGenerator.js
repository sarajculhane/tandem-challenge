import React from 'react'
import triviaData from '../jsondata'
import QuestionList from './QuestionList'

const QuestionGenerator = () => {
    
    // select a set of (unique) random questions a round
    const randomSelect = () => {
        let i = 0
        const vals = [...triviaData]
        const questions = Array(10).fill(null)
        
        while(i < questions.length)  {
            let idx = Math.floor(Math.random()*questions.length)
            questions[i] = vals[idx]
            vals.splice(idx, 1)
            i++
        }
        return questions
    }
    const questions = randomSelect()

    return (
        
        <div>
            <QuestionList questions={questions} />
        </div>
    )
}

export default QuestionGenerator