import React from 'react';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions/getevents'

class SearchBox extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(fetchEvents(this.input.value));
    console.log(this.input.value);
  }
  render() {
    const events = this.props.events.map((event, index) => (
      <li key={index}>{event.title}
      <br/>{event.description}<br/>{event.dateOfEvent}</li>
    ));
  return (
  
  <div>
    <h2>Search for local events</h2>
    <form onSubmit={e => this.onSubmit(e)}>
       <input 
            type ="text" 
            id='event-input' 
            placeholder='Search for an event'
            ref={input => (this.input = input)}>
        </input>
        <input type='submit'></input>
      </form>
      <ul>{events}</ul>
  </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(SearchBox);