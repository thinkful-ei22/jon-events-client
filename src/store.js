import {createStore, applyMiddleware} from 'redux';
import {crudReducer} from './reducers/crud';
import thunk from 'redux-thunk';



export default createStore(
    crudReducer,
    applyMiddleware(thunk)
);


