import React from 'react';
import Nav from '../components/Courses/Nav'
import HeroSection from '../components/Services/HeroSection';
import Workshops from '../components/Services/Section4';
import TechExpo from '../components/Services/Section2';
import Printing from '../components/Services/Section6';



const Services = () => {
  return (
    <div>
        <Nav/>
        <HeroSection/>
        <TechExpo/>
        <Workshops/>
        <Printing/>
      
    </div>
  );
}

export default Services;
