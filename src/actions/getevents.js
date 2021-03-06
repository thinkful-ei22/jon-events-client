import {API_BASE_URL} from '../config';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST
})

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  data
})

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (err) => ({
  type: FETCH_ERROR,
  err
})



export const fetchEvents = (query) => dispatch => {
  // console.log('fetchEvents was called');
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/events?searchTerm=${query}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return(res.json())
    })
    .then(events => dispatch(fetchSuccess(events)))
    .catch(err => dispatch(fetchError(err)))
  }

  export const displayEvents = (data) => dispatch => {
    // console.log('fetchEvents was called');
    dispatch(fetchRequest());
    fetch(`${API_BASE_URL}/events`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText)
        }
        return(res.json())
      })
      .then(events => dispatch(fetchSuccess(events)))
      .catch(err => dispatch(fetchError(err)))
    }