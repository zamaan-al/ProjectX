import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Courses from './pages/Courses'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
   <Routes>
    <Route path='/' element={<LandingPage/>}/> 
    <Route path='/courses' element={<Courses/>}/>
   </Routes>
   </Router>


  )
}
export default App
