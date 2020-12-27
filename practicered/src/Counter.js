import React,{Component} from 'react'
import {connect} from 'react-redux'


class Counter extends Component{

    state={
        counter:0
    }

    counterChangedHandler=(action,value)=>{

        switch(action){
            case "inc":
                this.setState(pre=>{
                    return{counter:pre.counter=1}
                })
                break;
                case 'dec':
                    this.setState(pre=>{
                        return{
                            counter:pre.counter-1
                        }
                    })
                    
                
        }
    }
}
export default Counter