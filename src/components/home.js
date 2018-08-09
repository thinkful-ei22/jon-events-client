import React from 'react';
import SearchBox from './searchbox';
import EventList from './eventlist';

export default function Home(props) {
  return (
    <div>
      <SearchBox/>
      <EventList/>
    </div>
  )
}