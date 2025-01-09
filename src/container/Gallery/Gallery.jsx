import React from 'react';
import {images} from "../../constants"
import {SubHeading} from "../../components"
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from "react-icons/bs"

import './Gallery.css';

const Gallery = () => {


  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const galleryImages=[images.e6,images.e5,images.e4,images.e3,images.e2,images.e1]



  return (
  <div className='app__gallery flex__center' id="gallery">

    <div className='app__gallery-content'>
      <h1 className='headtext__cormorant'>Events</h1>
      <p className='p__opensans' style={{ margin: "1rem 0", fontFamily: "Arial", color: "white", fontSize: "20px"}}>Gangotri 1.0, hosted by the IKS Society at IIEST Shibpur, is a grand celebration of India's rich cultural heritage. The event features thematic book stalls, manuscript displays, and workshops on ancient Indian scripts. Engaging activities include storytelling sessions, quizzes, VR experiences of historical sites, and eco-friendly initiatives. Notable competitions like "Chakravhyu," a treasure hunt rooted in Indian history, "Nibandh," an essay contest on cultural themes, "Slok," a Sanskrit recitation event, and "Shatranj," a chess tournament, invite participants to delve into India's intellectual legacy. Gangotri 1.0 aims to inspire and connect the past with the future.




</p>
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
         { 
           galleryImages.map((image,index)=>{
            return (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              
              </div> )
            
          } )
           }
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('Right')} />
      </div>
    </div>
  </div> )
};

export default Gallery;
