// ...existing code...
import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'

// lazy-load pages and footer
const LandingPage = lazy(() => import('./pages/LandingPage'))
const Courses = lazy(() => import('./pages/Courses'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Services = lazy(() => import('./pages/Services'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  // removed unused state to reduce bundle
  return (
    <Router>
      <ScrollToTop />

      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      

      {/* Footer lazy-loaded with its own boundary to avoid blocking routes */}
      <Suspense fallback={<div aria-hidden="true" />}>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
// ...existing code...