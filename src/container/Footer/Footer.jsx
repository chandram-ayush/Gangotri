import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants'; // Assuming the logo image is included in images
import './Footer.css';

const Footer = () => (
  <div className="app__footer" id="contact">
    

    <div className='app__footer-content'>
      <div className='app__footer-links'>

        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>Joyanta Debnath (Coordinator)</p>
          <p className='p__opensans'>
            +91 8910361343
          </p>
          <p className='p__opensans'>Akash Chandra Moulik ( Joint Coordinator)</p>
          <p className='p__opensans'>
            +91 8250379945
          </p>
        </div>

        <div className='app__footer-links_logo'>
          <img src={images.ikslogo} alt="logo" className="footer__logo" />
        </div>

      </div>

      <div className='footer__social-media'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>

      <div className='footer__copyright'>
        <p className='p__opensans'>2024 Gangotri. All Rights Reserved.</p>
        <p className='p__opensans'>Made by Ayush Chandram</p>
      </div>
    </div>

  </div>
);

export default Footer;
