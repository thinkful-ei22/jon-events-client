import React from 'react';

export default function Login(props) {
  return (
    <div>
      <form>
        <label htmlFor='user'>Username:</label>
        <input type='text' id='user'></input>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password'></input>
        <input type='submit' value ='Login'></input>
      </form>
    </div>
  )
}