import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />

      <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
       <h1 className='app__footer-headtext'>Contact Us</h1>
       <p  className='p__opensans'>WORKSHOP ADDRESS - PANJWARA, BAIDACHAK, OPP. - SARKARI SCHOOL</p>
       <p  className='p__opensans'>+91 9225223456 (MANOJ V PATHAK)</p>
      </div>

      

      <div className='app__footer-links_work'>
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Saturday:</p>
        <p className="p__opensans">09:00 am - 6:00 pm</p>
      </div>
      </div>

      <div className='footer__copyright'>
      <p className='p__opensans'>2024 Mayuresh Udyam. All Rights Reserved.</p>
      </div>


    
   
  </div>
);

export default Footer;
