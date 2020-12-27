

const redux=require('redux');


const createStore=redux.createStore;

//InitialState

let initialState={
    counter:+0
}


//reducers

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "INC":
            return {...state,counter:state.counter+1};
            case "ADD":{
                return {...state,counter:state.counter + action.value}
            }
    }
}

//Store

const store=createStore(reducer)
store.subscribe(()=>console.log("[Subscription]",store.getState()))


store.dispatch({type:"INC"})

store.dispatch({type:"ADD" ,value:10})

console.log(store.getState())