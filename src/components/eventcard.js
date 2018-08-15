import React from 'react';
import './eventcard.css';
import moment from 'moment';


const EventCard =(props) =>  {
  console.log(props);
  return(
    <div className='eventcards'>
        {props.imageUrl && <img src={props.imageUrl}/> } 
        <h3 id="eventcard-date">{moment(props.dateOfEvent).format('LLLL')}</h3>
        <h3 id="eventcard-title"><u>{props.title}</u></h3>
        <h3 id="eventcard-description">"{props.description}"</h3>  
    </div>
  )
}

export default EventCard;