import React from 'react';
import {connect} from 'react-redux';
import './searchbox.css';
import {fetchEvents} from '../actions/getevents'


class SearchBox extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(fetchEvents(this.input.value));
    console.log(this.input.value);
  }

  render() {

  return (
    <div className="search-box-header">
      <h2>Find a New Experience</h2>
      <div className='search-box-container'>
        <form className='searchbox' onSubmit={e => this.onSubmit(e)}>
          <input 
                type ="text" 
                id='event-input' 
                placeholder='Search for events or descriptions'
                ref={input => (this.input = input)}/>
            <input src="" id="event-submit" type='submit' value='SEARCH'/>
          </form>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.crudReducer.events,
  loading: state.crudReducer.loading,
  error: state.crudReducer.error
})

export default connect(mapStateToProps)(SearchBox);