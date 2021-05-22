import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {increment} from './Redux/Actions/App';
export default function App() {

  // const user = useSelector((state)=> console.log(state) );
  const values = useSelector((state)=> state.reducer.value);  // Reducer finding
  
  const dispatch = useDispatch();
    console.log(values);
  return (
    <div>
      <h1>Todo App</h1>
      <h2>{values}</h2>
      <button onClick={()=> dispatch(increment())}>Click Me</button>
     {/* <Form /> */}
    </div>
  );
}