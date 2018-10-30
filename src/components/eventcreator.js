import React from 'react';
import './eventcreator.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import moment from 'moment';
import {postEvents} from '../actions/postevents';

class EventCreator extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const data = {
      title: e.target.eventname.value,
      description: e.target.descname.value,
      info: e.target.eventinfo.value,
      dateOfEvent: e.target.date.value,
      imageUrl: e.target.image.value
    }
    // console.log(data);
    this.props.dispatch(postEvents(data));
    this.props.history.push('/');
  }

  imageChange = e => {
    // console.log(e.target.files);
  }
  
  render() {
  return (
    <div>
      <h3 className="create-event-title">Create an Event</h3>
      <div className="style-border"></div>
      <h2 id="create-event-header">Event Details</h2>
        <div className="create-container">
          <form onSubmit={e => this.onSubmit(e)}>
            <label htmlFor='event-name'>Event Name:</label>
            <input type='text' id='event-name' name='eventname'></input>
            <label htmlFor='desc'>Event Description:</label>
            <input type='text'id='event-desc' name='descname'></input>
            <label htmlFor='info'>Event Info:</label>
            <textarea rows='7' cols='65' type='text'id='event-info' name='eventinfo'></textarea>
            <label htmlFor='date'>Event Date</label>
            <input type='datetime-local' id='event-date' name='date'></input><br/>
            <label htmlFor="event-picture">Image:</label>
            <input type="text" id="event-picture" name="image" placeholder="Enter image URL"/>
            <input type='submit' value='Create Event' id="create-event-button"></input>
          </form>
        </div>
    </div>
  )
  }
}

const mapStateToProps = state => ({
  events: state.crudReducer.events,
  loading: state.crudReducer.loading,
  error: state.crudReducer.error
})

export default connect(mapStateToProps)(withRouter(EventCreator));