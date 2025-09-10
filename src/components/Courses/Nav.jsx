import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-4 sm:px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between max-w-7xl">
        
        {/* Logo Section (flush left) */}
        <div className="flex-shrink-0">
          <img
            src="ProjectX Logo white 1.png"
            alt="ProjectX"
            className="h-8 sm:h-12 md:h-14 w-auto"
          />
        </div>

        {/* Right side content (links + mobile menu button) */}
        {/* <div className="flex items-center ml-auto space-x-6 lg:space-x-8"> */}
          {/* Desktop Menu */}
           <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#" className="text-white hover:text-blue-200 text-xs sm:text-sm font-medium transition-colors duration-200">Our Story</a>
              <a href="#" className="text-white hover:text-blue-200 text-xs sm:text-sm font-medium transition-colors duration-200">Services</a>
              <a href="#" className="text-white hover:text-blue-200 text-xs sm:text-sm font-medium transition-colors duration-200">Courses</a>
              <a href="#" className="text-white hover:text-blue-200 text-xs sm:text-sm font-medium transition-colors duration-200">Gallery</a>
              <a href="#" className="text-white hover:text-blue-200 text-xs sm:text-sm font-medium transition-colors duration-200">Contact Us</a>
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
        
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-3 mx-4 sm:mx-0">
              <a href="#" className="block text-white hover:text-blue-200 py-2 text-sm transition-colors duration-200">Our Story</a>
              <a href="#" className="block text-white hover:text-blue-200 py-2 text-sm transition-colors duration-200">Services</a>
              <a href="#" className="block text-white hover:text-blue-200 py-2 text-sm transition-colors duration-200">Courses</a>
              <a href="#" className="block text-white hover:text-blue-200 py-2 text-sm transition-colors duration-200">Gallery</a>
              <a href="#" className="block text-white hover:text-blue-200 py-2 text-sm transition-colors duration-200">Contact Us</a>
            </div>
      )}
    </header>
  );
};

export default Nav;
