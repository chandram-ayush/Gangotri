import React from 'react';
import {images} from "../../constants"
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
 

  <div className='app__aboutus-content '>
    <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>About Us</h1>

    <p className='p__opensans' style={{ margin: "1rem 0", fontFamily: "Arial", color: "black", fontSize: "20px"}}>We offer top-quality aluminium doors, windows,
and partitions, crafted for modern architectural
styles. Renowned for exceptional strength and
durability, especially our Zindal series. Treated with
superior etnochrome coating, our aluminium
profiles are low-maintenance, non-flammable,
colorfast, and 100% recyclable. Aluminium is our
top choice for windows due to its unmatched
performance and longevity, making it the perfect
solution for your architectural needs.</p>

    </div>
  
    <div className="app__aboutus-content_knife flex__center">
        <img src={images.manoj} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">From Owner</h1>
        
        <p className='p__opensans' style={{ margin: "1rem 0", fontFamily: "Arial", color: "black", fontSize: "20px"}}>With over 25 years of experience in the industry, I have establishing myself as a trusted professional in Mumbai, catering to multiple clients and industries.
My expertise lies in delivering high-quality products that prioritize durability and longevity. Through meticulous attention to detail and a commitment to excellence, I ensure that every product meets the highest standards of quality, earning the trust and satisfaction of my valued clientele.
</p>

      </div>


  </div>
  </div>
);

export default AboutUs;
