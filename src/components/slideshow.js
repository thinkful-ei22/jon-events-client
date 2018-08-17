import React from 'react';
import './slideshow.css';
import { Slide } from 'react-slideshow-image';

const images = [require("../assets/img/img1.jpg"), require("../assets/img/img2.jpg"), require("../assets/img/img4.jpg")]

export default function Slideshow() {
 
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