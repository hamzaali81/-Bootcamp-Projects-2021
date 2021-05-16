import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Todo from './Component/Todo';
import { db } from './firebase';
import firebase from 'firebase';

console.log(db);
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // console.log(todos);

  // when the app loads, we needs to listen to the database and fetch new todos as they get added/removed
  // useEffect(()=> {
  // // this code here... when the app.js load
  // }, dependancies)
  useEffect(()=> {
  // this code here... when the app.js load
  db.collection('todos').onSnapshot(snapshot => {
    console.log(snapshot.docs.map(doc => doc.data().todo));
    setTodos(snapshot.docs.map(doc => ({id:doc.id ,todo: doc.data().todo})))
  });
  }, []);

  const addTodo=(e)=> {
    // this will fire off when we click the button 
    e.preventDefault(); // will stop the REFRESH
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()  
    })
    setTodos([...todos, input]);
    setInput('');
    console.log(todos);
  }
    return (
    <div>
      <h1>Hello Todo App</h1>
      {/* todo list  */}
      {/* done */}
      {/* <input value={input} onChange={(e)=>setInput(e.target.value)}/> */}
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={(e)=> setInput(e.target.value)}/>
       
      </FormControl>
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
   Add Todo
</Button>
      <ul>
    {todos.map((todo)=> (
      <Todo todo={todo}>
        {/* {todo} */}
      </Todo>
    ))}
  
       
      </ul>
    </div>
  )
}

export default App;
