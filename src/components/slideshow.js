import React from 'react';
import './slideshow.css';
import { Slide } from 'react-slideshow-image';
import {connect} from 'react-redux';


const images = [require("../assets/img/img1.jpg"), require("../assets/img/img2.jpg"), require("../assets/img/img4.jpg")]

function Slideshow(props) {
 if (props.isLogged) {
   return null;
 }
  return (
    <div className="slideshow-container">
        <Slide
            images={images}
            duration={4000}
            transitionDuration={1000}
          />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLogged: state.authReducer.loggedIn, 
}); 

export default connect(mapStateToProps)(Slideshow);