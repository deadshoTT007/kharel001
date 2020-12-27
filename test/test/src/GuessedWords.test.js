import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import {checkProps} from './DataTest';
import GuessedWords from './GuessedWords';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter:new EnzymeAdapter()})
const defaultProps={
    guessedWords:[{guessedWord:"train",lettersMatchCount:5}]
}


const setup=(props={})=>{
    const setupProps={...defaultProps,...props};
    return shallow(<GuessedWords {...setupProps}/>)
}
const dataTest=(wrapper,variable)=>{
    return wrapper.find(`[data-test="${variable}"]`)
}

test("renders the default props without error",()=>{
    
    checkProps(GuessedWords,defaultProps)
})

describe("if there are no words guessed",()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper=setup({guessedWords:[]})
    })
    test("renders without error",()=>{
        const component=dataTest(wrapper,'component-guessed')
        expect(component.length).toBe(1)
    })
    test("renders instruction to guess a word",()=>{
        const component=dataTest(wrapper,"guess-instruction")
        expect(component.text().length).not.toBe(0);
    })
})
describe("if there are words guuessed", ()=>{

    let wrapper;
       const guessedWords=[
            {guessedWord:"train",lettersMatchCount:3},
    {guessedWord:'agile',lettersMatchCount:3},
{ guessedWord:"party",lettersMatchCount:5}
]
    beforeEach(()=>{

        wrapper=setup({guessedWords})
    })
    test("renders without error",()=>{
        const component=dataTest(wrapper,"component-guessed-words");
        expect(component.length).toBe(1);
    })
    test("render guessedword secion",()=>{
        
        const guessedWord=dataTest(wrapper,"guessed-words");
        expect(guessedWord.length).toBe(1)
    })
    test("correct no. of guessed words",()=>{
        const guessedWordLength=dataTest(wrapper,"guessed-word");
        expect(guessedWordLength.length).toBe(guessedWords.length)
    })


})