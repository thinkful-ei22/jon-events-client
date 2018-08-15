import React from 'react';
import './navbar.css';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

class NavBar extends React.Component {

  logOut = () => {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.history.push('/');
  }

 render() {
 
  return (
    <header className='nav-bar'>
        <h1><Link className='logo' to='/'>EventList</Link></h1>
        <ul>
           {/* <li className='link'><>Browse Events</a></li> */}
           {this.props.isLogged ? (
              
              <React.Fragment>
               <li className='link'><Link to='/create-event' id="create-event-link">Create Event</Link></li>
               {this.props.currentUser && (
                  <button onClick={this.logOut}>LOG OUT</button>
               )}
              </React.Fragment>
           ): (
             <React.Fragment>
               <li className='link'><Link to='/sign-up' id="sign-up-link">SIGN UP</Link></li>
               <li className='link'><Link to='/login' id="login-link">LOGIN</Link></li>
             </React.Fragment>
           )}
        </ul>
      </header>
  )
}
}

export default connect()(withRouter(NavBar));