import React from "react";
import Nav from "../components/Courses/Nav";
import AboutSection from "../components/AboutUs/AboutSection";
import VisionSection from "../components/AboutUs/VisionSection";
import MilestoneTimeline from "../components/AboutUs/MilestoneTimeLine";
import FoundersStory from "../components/AboutUs/FoundersStory";
import MapSlide from "../components/AboutUs/MapSlide";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Nav />
      <AboutSection/>
      <VisionSection/>
      <MilestoneTimeline/>
      <FoundersStory/>
      <MapSlide/>
      
    </div>
  );
};

export default AboutUs;
