import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import {Redirect} from 'react-router-dom';

export class Login extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    // console.log(data);
    this.props.dispatch(login(data));
  }
  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
            Incorrect username or password
        </div>
    );
    }
    if (this.props.isLogged) {
      return <Redirect to="/dashboard"/>
    }
  return (
    <div>
      <form className='form-login' onSubmit={e => this.onSubmit(e)}>
      {error}
        <label htmlFor='user'>Username:</label>
        <input type='text' id='user' name='username' required></input>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required></input>
        <input type='submit' value ='Login'></input>
      </form>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.authReducer.loading,
  error: state.authReducer.error,
  isLogged: state.authReducer.loggedIn 
})

export default connect(mapStateToProps)(Login);