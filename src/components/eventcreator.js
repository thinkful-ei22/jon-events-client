import React from 'react';
import './eventcreator.css'
import {connect} from 'react-redux';
import {postEvents} from '../actions/postevents';

class EventCreator extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const data = {
      title: e.target.eventname.value,
      description: e.target.descname.value,
      dateOfEvent: e.target.date.value
    }
    console.log(data);
    this.props.dispatch(postEvents(data));
  }
  
  render() {
  return (
    <div>
      <form onSubmit={e => this.onSubmit(e)}>
        <label htmlFor='event-name'>Name of Event:</label>
        <input type='text' id='event-name' name='eventname'></input>
        <label htmlFor='desc'>Description of event:</label>
        <input type='text'id='desc' name='descname'></input>
        <label htmlFor='date'>Date of Event</label>
        <input type='datetime-local' id='date' name='date'></input>
        <input type='submit' value='Create Event'></input>
      </form>
    </div>
  )
  }
}

const mapStateToProps = state => ({
  events: state.crudReducer.events,
  loading: state.crudReducer.loading,
  error: state.crudReducer.error
})

export default connect(mapStateToProps)(EventCreator);