import React from 'react';
import { images } from "../../constants";
import './Header.css';

import PdfButton from '../pdfbutton';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
    
      <h1 className='app__header-h1'>Mayuresh</h1>
      <h2 className='app__header-h2'>Udyam</h2>
      <p className='p__opensans' style={{ margin: "1rem 0", fontFamily: "Arial", color: "black", fontSize: "25px"}}>
        Your one-stop solution! for premium aluminium architectural products, featuring Delux Series sliding windows, French windows, doors, partitions, and more.
      </p>
      <PdfButton />
    </div> 
    <div className="app__wrapper_img">
      <img src={images.w8} alt="header_img" />
    </div>
  </div>
);

export default Header;
