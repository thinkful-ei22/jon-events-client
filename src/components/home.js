import React from 'react';
import SearchBox from './searchbox';
import EventList from './eventlist';
import Slideshow from './slideshow';
import Welcome from './welcome';

export default function Home(props) {
 
  return (
    <div>
      <Welcome/>
      <Slideshow/>
      <SearchBox/>
      <EventList/>
    </div>
  )
}