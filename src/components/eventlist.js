import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import EventCard from './eventcard';
import './eventlist.css'

class EventList extends React.Component {

  render() {
    const events = this.props.events.map((event, index) => (
      <Link to={`/event/${event._id}`} key={event._id} id="event-links"><EventCard {...event}/></Link>
    ));
    // console.log(events);

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