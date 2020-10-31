import React from 'react'
import triviaData from '../jsondata'
import Game from './Game'

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

    // used to create a new property on each question with a random ordering of answers
    // the correct answer is still an object so that we can check for this later
    const getChoices = (question) => {
        const choices = [{correct: question.correct}, ...question.incorrect]
        const shuffle = (choices) => choices.sort(() => Math.random()- 0.5)
        return shuffle(choices)
    }

    const questions = randomSelect()
    questions.forEach((question) => question.choices = getChoices(question))

    return (
        
        <div>
            <Game questions={questions} />
        </div>
    )
}

export default QuestionGenerator