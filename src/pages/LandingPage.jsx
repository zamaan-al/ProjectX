import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StateSection'
import ProjectXConcept from '../components/ProjectxConcept'
import InnovatorJourney from '../components/InnovatorJourney'
import WhyProjectX from '../components/WhyprojectX'
import BenefitsProjectX from '../components/BenefitsProjectx'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <ProjectXConcept/>
      <InnovatorJourney/>
      <WhyProjectX/>
      <BenefitsProjectX/>
      
    </div>
  )
}

export default LandingPage
