import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_ERROR} from '../actions/users';

const initialState = {
  isLogged: false,
  loading: false,
  error: null
}

export function userReducer(state = initialState, action) {
  if (action.type === REGISTER_REQUEST) {
    // console.log('request being made')
    return {
      ...state,
      loading: true,
      error:null
    }
  }
  else if (action.type === REGISTER_SUCCESS) {
    // console.log('Registered successfully')
    return {
      ...state,
      isLogged: action.data,
      loading: false,
      error: null
    }
  }
  else if (action.type === REGISTER_ERROR) {
    // console.log('Error with request')
    return {
      ...state,
      loading: false,
      error: action.err
    }
  }
  return state;
}