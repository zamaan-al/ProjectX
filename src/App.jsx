import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Courses from './pages/Courses'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from './pages/AboutUs'

import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
   <Routes>
    <Route path='/' element={<LandingPage/>}/> 
    <Route path='/courses' element={<Courses/>}/>

    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/services' element={<Services/>}/>

   </Routes>
   </Router>


  )
}
export default App
