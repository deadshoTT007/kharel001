import React,{Component} from 'react';


import './App.css';

class App extends Component{
  render(){
    return(
      <>
      <div data-test="component-app">
        <h1 data-test="increment-counter">0</h1>
        <button data-test="increment-button">Increment</button>

      </div>
      </>
    )


      
    
  }
}


export default App;
