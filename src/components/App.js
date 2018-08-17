import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import SearchBox from './searchbox';
import {Redirect} from 'react-router-dom';
import EventList from './eventlist';
import SignUp from './sign-up';
import Login from './login';
import Home from './home';
import EventCreator from './eventcreator';
import EventDesc from './eventdesc';
import NavBar from './navbar';
import { displayEvents } from '../actions/getevents';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(displayEvents());
  }

 render() {
 
 return (
   <Router>
     <div className='app'>
        <NavBar isLogged={this.props.isLogged} currentUser={this.props.currentUser}/>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/sign-up' component={SignUp}/>
        <Route exact path ='/login' component={Login}/>
        <Route exact path ='/create-event' component={EventCreator}/>
        <Route exact path ='/event/:id' component={EventDesc}/>
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