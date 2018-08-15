import React from 'react';
import SearchBox from './searchbox';
import EventList from './eventlist';

export default function Home(props) {
 
  return (
    <div>
      <img id='top-image' src={window.location.origin + '/img/concert.jpg'} />
      <SearchBox/>
      <EventList/>
    </div>
  )
}