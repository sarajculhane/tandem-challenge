import React from "react";
import { unmountComponentAtNode } from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
import QuestionGenerator, {randomSelect, getChoices} from './QuestionGenerator'
import triviaData from '../jsondata'


it("renders without crashing", () => {
    shallow(<QuestionGenerator />);
  });

it('renders the Game componenent', () => {
    const wrapper = shallow(<QuestionGenerator />)
    expect(wrapper.find('Game').length === 1).toBe(true)
});



/// Functions

// randomSelect

const questions = randomSelect(triviaData)


it("randomSelect generates an array of length 10 from the triviaData", () => {
    
    expect(questions.length).toBe(10)
})

it("randomSelect generates an array of unique values", () => {
    const unique = new Set()
    questions.forEach((question) => unique.add(question.question))
    expect(unique.size).toBe(10)
    console.log(triviaData[0])
})

// getChoices

const testQuestion = {
    question: 'How is your day?',
    incorrect: ['Bad', 'Good', 'Average'
    ],
    correct: 'Awesome'
}

const choices = getChoices(testQuestion)

it('getChoices takes in a question object and returns and array of length 4 of choices' , () => {
    expect(choices.length).toBe(4)
})

it('getChoices returns exactly one Object that has the property correct which is the correct answer' , () => {
    let correct = []
    choices.forEach((choice) => {
        if(typeof choice === 'object') correct.push(choice)
    })
    expect(correct.length).toBe(1)
    expect(correct[0].correct).toBe('Awesome')
})

// it('getChoices will shuffle the ordering of selections', () => {
//     const preShuffle = [{correct: testQuestion.correct}, ...testQuestion.incorrect]
//     const choices2 = getChoices(testQuestion)
//     const choices3 = getChoices(testQuestion)


// })