import React from 'react';
import './eventdesc.css'
import {connect} from 'react-redux';
import { displayEvents } from '../actions/getevents';
import moment from 'moment';
import EventList from './eventlist';

class EventDesc extends React.Component {


  render() {
    // console.log(this.props);
    const id = this.props.match.params.id;
    const event = this.props.events.filter(event => {
      return event._id === id
    })[0]
    if (!event) {
      return 'loading'
    }
    // console.log(event);
  return (
    <div>
        <h1 id="eventdesc-top-header">Your Next Experience</h1>
        <div className="eventdesc-container">
          <header className="eventdesc-header">
              <h2 id="eventdesc-title">{event.title}</h2>
                <img src={event.imageUrl}/>
                <h4 className="eventdesc-labels">When</h4>
                <h3 id="eventdesc-date">{moment(event.dateOfEvent).format('LLLL')}</h3>
            </header>
          <h4><strong className="eventdesc-labels">Description</strong></h4>
          <p id="eventdesc-desc">{event.description}</p>
          <h4><strong className="eventdesc-labels">Info</strong></h4>
          <p id="eventdesc-desc">{event.info}</p>
        </div>
        <h2 id="eventdesc-bottom-header">Browse Other Events</h2>
        <div>
          <EventList/>
        </div>
    </div>
  )
}
}

const mapStateToProps = state => {
    console.log(state);
  return ({
  events: state.crudReducer.events
})}

export default connect(mapStateToProps)(EventDesc);