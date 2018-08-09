import React from 'react';
import {connect} from 'react-redux';
import { displayEvents } from '../actions/getevents';

class EventList extends React.Component {
  componentDidMount() {
    this.props.dispatch(displayEvents());
  }
  render() {
    const events = this.props.events.map((event, index) => (
      <li key={index}>{event.title}
      <br/>{event.description}<br/>{event.dateOfEvent}</li>
    ));

    return (
      <ul>
        {events}
      </ul>
    )
  }

}

const mapStateToProps = state => ({
  events: state.crudReducer.events,
  loading: state.crudReducer.loading,
  error: state.crudReducer.error
})

export default connect(mapStateToProps)(EventList);