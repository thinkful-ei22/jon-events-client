import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import SearchBox from './searchbox';
import EventList from './eventlist';
import SignUp from './sign-up';
import Login from './login';
import Home from './home';
import EventCreator from './eventcreator';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default function App(props) {
  
 return (
   <Router>
     <div className='app'>
      <header>
        <h1><Link to='/'>EventList</Link></h1>
        <ul>
           {/* <li className='link'><>Browse Events</a></li> */}
           <li className='link'><Link to='/create-event'>Create Event</Link></li>
           <li className='link'><Link to='/sign-up'>Sign up</Link></li>
           <li className='link'><Link to='/login'>Login</Link></li>
           <Route exact path ='/sign-up' component={SignUp}/>
           <Route exact path ='/login' component={Login}/>
           <Route exact path ='/create-event' component={EventCreator}/>
        </ul>
      </header>
      <main>
        <Route exact path ='/' component={Home}/>
      </main>
     </div>
   </Router>
 )
}
