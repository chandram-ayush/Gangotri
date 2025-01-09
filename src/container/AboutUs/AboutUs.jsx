
import React from 'react';
import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_img">
      <img src={images.iksposter} alt="header_img" />
    </div>
   
    <div className='app__wrapper_info'>
    
      <h1 className='app__header-h1'>Indian Knowledge System</h1>
      
      <p className='p__opensans' style={{ margin: "1rem 0", fontFamily: "Arial", color: "black", fontSize: "20px"}}>
      The Indian Knowledge Systems (IKS) Society at IIEST Shibpur is a vibrant initiative aimed at rediscovering and rejuvenating India’s timeless wisdom while blending it seamlessly with modern knowledge systems. With a focus on interdisciplinary and transdisciplinary research, the society explores the vast richness of IKS to solve contemporary challenges. Through initiatives such as establishing research centers, organizing engaging workshops, faculty programs, student internships, and community outreach, the IKS Society strives to make this ancient knowledge relevant and impactful for today’s world. Guided by the principles of Paramparā (heritage), Dṛṣṭi (unique perspectives), and Laukika-prayojana (practical utility), it envisions a future where traditional wisdom inspires innovation and fosters a new generation of pioneers who will carry forward the legacy of Bhāratīya knowledge systems with pride and purpose.
      </p>
      
    </div> 
    
  </div>
);

export default AboutUs;

