import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// import {DataTest} from './DataTest.test';
import {checkProps, DataTest} from './DataTest';
import Congrats from './Congrats'
// import { render } from '@testing-library/react';
import App from './App';


Enzyme.configure({adapter:new EnzymeAdapter()});

const defaultProps={success:true}

const setup=(props={})=>{
const modifiedProps={...defaultProps,...props}
    return shallow(<Congrats {...modifiedProps}/>)
}
const dataTest=(wrapper,variable)=>{
    return wrapper.find(`[data-test="${variable}"]`)
}

test('renders without error',()=>{
    const wrapper=setup({success:true});
    const component=dataTest(wrapper,"congrats-message");
    expect(component.length).toBe(1);
})

test('render no text when success prop is false',()=>{

    const wrapper=setup({success:true});
    const component=dataTest(wrapper,"component-congrats")
    expect(component.length).toBe(1);
})

test('renders a winnining message when success is true ',()=>{
    const wrapper=setup({success:true});
    const component=dataTest(wrapper,'congrats-message')
    expect(component.text().length).not.toBe(0)
    
})

// test("dada",()=>{
//     const expectedProps={success:true}
//     checkProps(Congrats,{...expectedProps});
// })