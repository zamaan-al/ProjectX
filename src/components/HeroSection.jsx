import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/freepik__candid-photography-with-natural-textures-and-highl__53773.png')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-blue z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>

      {/* Header */}
      <header className="relative px-4 sm:px-6 py-4 flex-shrink-0 z-20">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="ProjectX Logo white 1.png" alt="ProjectX" className="h-12 w-auto" />
            <img src="logo 3.png" alt="Bridge" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/aboutus" className="text-white hover:text-blue-200 transition-colors">Our Story</Link>
            <Link to="/services" className="text-white hover:text-blue-200 transition-colors">Services</Link>
            <Link to="/courses" className="text-white hover:text-blue-200 transition-colors">Courses</Link>
            <HashLink smooth to="#footer" className="text-white hover:text-blue-200 transition-colors">Contact Us</HashLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-3">
              <Link to="/" onClick={closeMenu} className="block text-white hover:text-blue-200">Home</Link>
              <Link to="/aboutus" onClick={closeMenu} className="block text-white hover:text-blue-200">Our Story</Link>
              <Link to="/services" onClick={closeMenu} className="block text-white hover:text-blue-200">Services</Link>
              <Link to="/courses" onClick={closeMenu} className="block text-white hover:text-blue-200">Courses</Link>
              <HashLink smooth to="#footer" onClick={closeMenu} className="block text-white hover:text-blue-200">Contact Us</HashLink>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Content */}
      <main className="relative z-20 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 py-24 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Your Child <br />
          <span className="text-blue-200">Our Innovator</span>
        </h1>
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
          Explore All Courses
        </button>
      </main>
    </div>
  );
};

export default HeroSection;
