import './App.css'
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'

// Lazy-load pages
const LandingPage = lazy(() => import('./pages/LandingPage'))
const Courses = lazy(() => import('./pages/Courses'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Services = lazy(() => import('./pages/Services'))
const Footer = lazy(() => import('./components/Footer'))

// Simple loader UI to prevent white flash
const Loader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
    transition: 'opacity 0.3s ease-in-out'
  }}>
    <p style={{ color: '#333', fontSize: '18px' }}>Loading...</p>
  </div>
)

function App() {

  // Preload key pages after first render to improve navigation speed
  useEffect(() => {
    import('./pages/AboutUs')
    import('./pages/Services')
    import('./pages/Courses')
  }, [])

  return (
    <Router>
      <ScrollToTop />

      {/* Wrap routes in Suspense so fallback appears during page loading */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
        </Routes>

        {/* Footer inside same Suspense for consistent transitions */}
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
