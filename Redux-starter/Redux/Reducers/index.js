const intialState =  {
    value: 0
}

const reducer = (state= intialState, action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD':
            return {
               ...state,  value: state.value + action.payload
            } 
        default :{
            return state
        }
    }
}
// const reducer = (state={}, action)=>{
//     console.log(action);
//     switch(action.type){
//         case 'ADD_TODO':
//             return {
//                ...state, 
//             } 
//         default :{
//             return state
//         }
//     }
// }


export {
   reducer
}