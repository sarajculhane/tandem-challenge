import React from 'react'
import triviaData from '../jsondata'
import QuestionCard from './QuestionCard'
import QuestionGenerator from './QuestionGenerator'


const App = () => {
    return (
        <div>
        {/* <QuestionCard /> */}
        <QuestionGenerator />
    </div>
    )
}

export default App