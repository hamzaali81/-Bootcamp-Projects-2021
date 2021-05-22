export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

const addTodo = (message) => {
    console.log(message);
    return {
        type: ADD_TODO,
        message,
        id: Math.random(),
    }
}
const deleteTodo = (id) => ({
        type: DELETE_TODO,
        id
})

const editTodo = (message) =>({
    type: EDIT_TODO,
    message

})
export { 
    addTodo,
    deleteTodo,
    editTodo
}
