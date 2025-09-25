import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Courses from './pages/Courses'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LandingPage/>}/> 
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>

      {/* 👇 Footer always visible */}
      <Footer />
    </Router>
  )
}

export default App
