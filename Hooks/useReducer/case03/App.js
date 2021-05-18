import React, {useEffect,useState, useReducer} from 'react'

// useReducer complex state & action
const initialState = {
    counter: 0,
    counter1: 10 
}
 
const reducers = (state, action)=>{
    console.log(state);
    switch(action.type){
        case 'increment': 
        return {...state,counter :state.counter + action.value};
        case 'increment1': 
        return {...state,counter1 :state.counter1 + action.value};
        // return {counter :state.counter + 1};
        case 'decrement': 
        return {...state,counter :state.counter - 1};
        case 'reset': 
        return initialState;
        default: 
        return state;
    }
}
function App() {
   const [count, dispatch] = useReducer(reducers, initialState);
   const [count1, dispatch1] = useReducer(reducers, initialState);
   // dispatch method executes the code of action
    return (
        <div>
          <h1>{count.counter}</h1>
          <h1>{count.counter1}</h1>
          <button onClick={()=> dispatch({type :'increment', value: 1})}>Increment</button>
          <button onClick={()=> dispatch({type :'decrement'})}>Decrement</button>
          <button onClick={()=> dispatch({type :'increment1', value: 10})}>Increment01</button>
          {/* <button onClick={()=> dispatch({type :'decrement'})}>Decrement</button> */}
          <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
          <br />
          <h2>{count1.counter}</h2>
          <h2>{count1.counter1}</h2>
          <button onClick={()=> dispatch1({type :'increment', value: 1})}>Increment</button>
          <button onClick={()=> dispatch1({type :'decrement'})}>Decrement</button>
          <button onClick={()=> dispatch1({type :'increment1', value: 10})}>Increment01</button>
        </div>
    )
}

export default App;
