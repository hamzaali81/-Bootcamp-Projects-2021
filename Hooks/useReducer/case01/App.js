import React, {useEffect,useState, useReducer} from 'react'

const initialState = 0;

const reducer = (state, action)=> {
   // accept current state and return new state
   console.log(state);
   switch(action){
   case 'increment': 
       return state + 1;
   case 'decrement': 
       return state - 1;
   case 'reset': 
       return initialState;
   default: 
   return state
   }
}
function App() {
   const [count, dispatch] = useReducer(reducer, initialState);
   // dispatch method executes the code of action
    return (
        <div>
            <h1>Count: {count}</h1>
         <button onClick={()=> dispatch('increment')}>Increment</button>
         <button onClick={()=> dispatch('decrement')}>Decrement</button>
         <button onClick={()=> dispatch('reset')}>Reset</button>
        
        </div>
    )
}

export default App;
