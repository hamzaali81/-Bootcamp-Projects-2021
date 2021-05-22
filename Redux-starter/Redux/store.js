
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import mainReducer from './mainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(mainReducer,composeEnhancers(
    applyMiddleware(thunk)
));
// console.log(store);

export default store;