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
  const galleryImages=[images.w1,images.w3,images.w4,images.cb1,images.cb2,images.d2,images.c2,images.s1]



  return (
  <div className='app__gallery flex__center' id="gallery">

    <div className='app__gallery-content'>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{ margin: "1rem 0", fontFamily: "Arial", color: "white", fontSize: "20px"}}>Discover our products gallery featuring top-quality aluminium doors, windows, and partitions, meticulously crafted to complement modern architectural styles, including our renowned Zindal series.




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
