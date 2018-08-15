import React from 'react';
import './eventdesc.css'
import {connect} from 'react-redux';
import { displayEvents } from '../actions/getevents';

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
        <div>
          <h1 id="eventdesc-title">{event.title}</h1>
            <div></div>
          <h3 id="eventdesc-date">When<br/>{event.dateOfEvent}</h3>
          <p id="eventdesc-desc"><strong>Description</strong><br/>{event.description}</p>
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