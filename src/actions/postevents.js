import {API_BASE_URL} from '../config';

export const POST_REQUEST = 'POST_REQUEST';
export const postRequest = () => ({
  type: POST_REQUEST
})

export const POST_SUCCESS = 'POST_SUCCESS';
export const postSuccess = (data) => ({
  type: POST_SUCCESS,
  data
})

export const POST_ERROR = 'POST_ERROR';
export const postError = (err) => ({
  type: POST_ERROR,
  err
})

export const postEvents = (data) => dispatch => {
  // console.log('postEvents was called');
  dispatch(postRequest());
  fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)})
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return(res.json())
    })
    .then(events => dispatch(postSuccess(events)))
    .catch(err => dispatch(postError(err)))
  }

