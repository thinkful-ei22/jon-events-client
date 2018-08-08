import React from 'react';
import {connect} from 'react-redux';

class EventList extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor='title-input'>Title:</label>
          <input type='text' id='title-input'></input>
          <label htmlFor='desc-input'>Description:</label>
          <input type='text' id='desc-input'></input>
          <label htmlFor='date-input'>Date of Event:</label>
          <input type='date' id='date-input'></input>
          <input type='submit' value='Create Event'></input>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(EventList);