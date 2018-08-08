import React from 'react';
import './navbar.css';

export default function NavBar(props) {
  return (
    <div id ='nav-bar'>
      <h3 id ='main-header'>EventFinder</h3>
      <ul>
        <li><a href=''>Browse events</a></li>
        <li><a href=''>Login</a></li>
        <li><a href=''>Sign-up</a></li>
      </ul>
    </div>
  )
}