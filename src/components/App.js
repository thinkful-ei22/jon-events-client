import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import SearchBox from './searchbox';
import {Redirect} from 'react-router-dom';
import EventList from './eventlist';
import SignUp from './sign-up';
import Login from './login';
import Home from './home';
import Dashboard from './dashboard';
import EventCreator from './eventcreator';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


class App extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
 render() {
  let logOutButton;
  if (this.props.currentUser) {
    logOutButton = (
      <button onClick={() => this.logOut()}>Log out</button>
  );
  }

 return (
   <Router>
     <div className='app'>
      <header>
        <h1><Link to='/'>EventList</Link></h1>
        {logOutButton}
        <ul>
           {/* <li className='link'><>Browse Events</a></li> */}
           {this.props.isLogged ? (
              
              <li className='link'><Link to='/create-event'>Create Event</Link></li>
           ): (
             <React.Fragment>
               <li className='link'><Link to='/sign-up'>Sign up</Link></li>
               <li className='link'><Link to='/login'>Login</Link></li>
             </React.Fragment>
           )}
        </ul>
      </header>
      <main>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/dashboard' component={Dashboard}/>
        <Route exact path ='/sign-up' component={SignUp}/>
        <Route exact path ='/login' component={Login}/>
        <Route exact path ='/create-event' component={EventCreator}/>
      </main>
     </div>
   </Router>
 )
}
}

const mapStateToProps = state => ({
  isLogged: state.authReducer.loggedIn, 
  currentUser: state.authReducer.currentUser !== null
})
export default connect(mapStateToProps)(App);