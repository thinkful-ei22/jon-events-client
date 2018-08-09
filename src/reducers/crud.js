import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR} from '../actions/getevents'
import {POST_REQUEST,POST_SUCCESS,POST_ERROR,} from '../actions/postevents';

const initialState = {
  events: [],
  loading: false,
  error: null
}

export function crudReducer(state = initialState, action) {
  if (action.type === FETCH_REQUEST) {
    console.log('request being made')
    return {
      ...state,
      loading: true,
      error:null
    }
  }
  else if(action.type === FETCH_SUCCESS) {
    console.log('successful request')
    return {
      ...state,
      loading: false,
      error: null,
      events: action.data
    }
  }
  else if (action.type === FETCH_ERROR) {
    console.log('Error with request')
    return {
      ...state,
      loading: false,
      error: action.err
    }
  }
  if (action.type === POST_REQUEST) {
    console.log('request being made')
    return {
      ...state,
      loading: true,
      error:null
    }
  }
  else if (action.type === POST_SUCCESS) {
    console.log('successful request')
    return {
      ...state,
      loading: false,
      error: null,
      events: [...state.events, action.data]
    }
  }
  else if (action.type === POST_ERROR) {
    console.log('Error with request')
    return {
      ...state,
      loading: false,
      error: action.err
    }
  }
  return state;
}