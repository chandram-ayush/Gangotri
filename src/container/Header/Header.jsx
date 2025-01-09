import React from 'react';
import { images } from "../../constants";
import './Header.css';

import EventCountdown from '../EventCountdown';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    
    <div className='app__wrapper_info'>
    
      <h1 className='app__header-h1'>Gangotri</h1>
      <h2 className='app__header-h2'>गंगोत्री</h2>
      <p className='p__opensans' style={{ margin: "1rem 0", fontFamily: "Arial", color: "black", fontSize: "20px"}}>
      Gangotri 1.0, the inaugural cultural fest by the IKS Society at IIEST
 Shibpur, is a vibrant celebration of India’s rich heritage and timeless
 wisdom through the lens of Indian Knowledge Systems. The fest
 features thematic book stalls on ancient Indian literature, science, and
 philosophy, interactive knowledge spaces with manuscript displays
 and calligraphy demonstrations, and hands-on workshops decoding
 ancient scripts. Engaging storytelling sessions, quizzes, VR
 experiences of Nalanda and Harappa, and eco-friendly themes bring
 history alive for all. With rare book displays, student authors’
 exhibits, and collaborative events with national institutions, Gangotri
 1.0 bridges the past and the future, inspiring innovation and a deep
 connection to India’s cultural and intellectual legacy.
      </p>
      <EventCountdown/>
    </div> 
    <div className="app__wrapper_img">
      <img src={images.gangotrilogo} alt="header_img" />
    </div>
  </div>
);

export default Header;
