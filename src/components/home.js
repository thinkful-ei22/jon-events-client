import React from 'react';
import SearchBox from './searchbox';
import EventList from './eventlist';
import Slideshow from './slideshow';

export default function Home(props) {
 
  return (
    <div>
      <Slideshow/>
      <SearchBox/>
      <EventList/>
    </div>
  )
}