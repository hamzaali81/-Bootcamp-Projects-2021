import React, {useState} from 'react';
import { List, Avatar, ListItemAvatar, ListItem, ListItemText, Button, Modal } from '@material-ui/core';
import { db } from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));         

function Todo({todo}) {
    // console.log(text);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    // const [close, setOpen] = useState(false);
    
    const handleOpen = ()=> {
    setOpen(true);
    }
    // const handleClose = ()=> {
    // setOpen(false);
    // }
    const updateTodo = () => {
        // update the todo 
        db.collection('todos').doc(todo.id).set({
        todo: input
        }, {merge: true})
        setOpen(false);
    }
    
    return (
        <div>
          <>
          <Modal
  open={open}
//   onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <div className={classes.paper}>
      <h1>I am a modal</h1>
      <input placeholder={todo.todo} value={input} onChange={ (e)=> setInput(e.target.value)}/>
      <button onClick={updateTodo}>Update todo</button>
  </div>
</Modal>
          <List>
              <ListItem>
                  <ListItemAvatar>
                      <ListItemText primary={todo.todo} secondary="Dummy deadline"/>
                  </ListItemAvatar>
              </ListItem>
              <button onClick={(e)=> setOpen(true)}>Edit</button>
              <Button onClick={(e)=> {db.collection('todos').doc(todo.id).delete()}}> DELETE ME</Button>
          </List>
          </>
        </div>
    )
}

export default Todo;
