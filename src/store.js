import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {crudReducer} from './reducers/crud';
import {userReducer} from './reducers/users';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';



const store = createStore(
    combineReducers({
        form: formReducer,
        userReducer,
        authReducer,
        crudReducer,
    }),
    applyMiddleware(thunk, createLogger())
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;