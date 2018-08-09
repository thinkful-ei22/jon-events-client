import React from 'react';
import './sign-up.css';
import {connect} from 'react-redux';
import {registerUser} from '../actions/users';
import {Redirect} from 'react-router-dom';

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
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
            Username already exists
        </div>
    );
    }
    if (this.props.isLogged) {
      return <Redirect to="/dashboard"/>
    }

  return (
    <div>
      <form onSubmit={e => this.onSubmit(e)}>
      {error}
        <label htmlFor='user'>Username:</label>
        <input type='text'id='user' name='username' required></input>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required></input>
        <label htmlFor='firstname'>First Name:</label>
        <input type='text' id='firstname' name='firstname' required></input>
        <label htmlFor='lastname'>Last Name:</label>
        <input type='text' id='lastname' name='lastname' required></input>
        <input type='submit' value='sign-up'></input>
      </form>
    </div>
  )
}
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.isLogged,
  loading: state.userReducer.loading,
  error: state.userReducer.error
})

export default connect(mapStateToProps)(SignUp);
