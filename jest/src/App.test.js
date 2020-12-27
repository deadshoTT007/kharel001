import React from 'react';
import Enzyme,{mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter:new EnzymeAdapter()});

import App from './App';

describe('App',()=>{
  let wrapper;
const onCountChange=jest.fn()
  beforeEach(()=>{
   wrapper=mount(<App onCountChange={onCountChange}/>)
  })
  it('render',()=>{
    expect(wrapper).not.toBENull;
  })
  it("shows my default text",()=>{

    expect(wrapper.find('p').text()).toEqual("0");
  })
  it('correctly increment the value when simulated or we can say click in our case on button ',()=>{
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual("1")
  })
})
