import React from 'react';
import './sign-up.css';
import {connect} from 'react-redux';
import {registerUser} from '../actions/users';

class SignUp extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value
    }
    console.log(data);
    this.props.dispatch(registerUser(data));
  }
  render(){
  return (
    <div>
      <form onSubmit={e => this.onSubmit(e)}>
        <label htmlFor='user'>Username:</label>
        <input type='text'id='user' name='username'></input>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password'></input>
        <label htmlFor='firstname'>First Name:</label>
        <input type='text' id='firstname' name='firstname'></input>
        <label htmlFor='lastname'>Last Name:</label>
        <input type='text' id='lastname' name='lastname'></input>
        <input type='submit' value='sign-up'></input>
      </form>
    </div>
  )
}
}

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(SignUp);
