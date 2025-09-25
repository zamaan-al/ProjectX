import React from 'react';
import Nav from '../components/Courses/Nav'
import HeroSection from '../components/Services/HeroSection';
import Workshops from '../components/Services/Section4';
import TechExpo from '../components/Services/Section2';
import Printing from '../components/Services/Section6';
import ProjectXEcommerce from '../components/Services/Section3';
import ProjectMaking from '../components/Services/Section5';
import Kits from '../components/Services/Section7';
import Footer from '../components/Footer'



const Services = () => {
  return (
    <div>
        <Nav/>
        <HeroSection/>
        <TechExpo/>
        <ProjectXEcommerce/>
        <Workshops/>
        <ProjectMaking/>
        <Printing/>
        <Kits/>
       
        
      
    </div>
  );
}

export default Services;
