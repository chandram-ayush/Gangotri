import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.ikslogo} alt='app_logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#gallery'>Events</a>
        </li>
        <li className='p__opensans'>
          <a href='#aboutus'>About Us</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>Contact Us</a>
        </li>
      </ul>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={handleMenuClick} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose
              fontSize={27}
              className='overlay__close'
              onClick={handleMenuClick}
            />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'>
                <a href='#home' onClick={handleMenuClick}>
                  Home
                </a>
              </li>
              <li className='p__opensans'>
                <a href='#gallery' onClick={handleMenuClick}>
                  Events
                </a>
              </li>
              <li className='p__opensans'>
                <a href='#about' onClick={handleMenuClick}>
                  About us
                </a>
              </li>
              <li className='p__opensans'>
                <a href='#contact' onClick={handleMenuClick}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
