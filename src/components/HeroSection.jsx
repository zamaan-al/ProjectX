import React, { useState } from "react";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/freepik__candid-photography-with-natural-textures-and-highl__53773.png')"
        }}
      ></div>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-blue z-10"></div>

      {/* Optional bottom dark fade for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-10"></div>

      {/* Page Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Header Navigation */}
        <header className="relative px-4 sm:px-6 py-4 flex-shrink-0">
          <nav className="flex items-center justify-between max-w-7xl ">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="ProjectX Logo white 1.png"
                  alt="ProjectX"
                  className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto"
                />
              </div>
              <div className="h-6 sm:h-10 w-px bg-white opacity-30 hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <img
                  src="logo 3.png"
                  alt="Bridge"
                  className="h-8 sm:h-12 md:h-16 lg:h-20 w-auto"
                />
              </div>
            </div>

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
              className="md:hidden text-white focus:outline-none p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* Hero Section */}
        <main className="relative px-4 sm:px-6 py-8 sm:py-16 md:py-24 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="space-y-4 mt-8 sm:mt-16 md:mt-24 lg:mt-[150px]">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-md">
                    Your Child <br />
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-md">Our Innovator</span>
                  </h1>
                </div>

                <div className="space-y-6">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center mx-auto lg:mx-0 space-x-2 group shadow-lg text-sm sm:text-base">
                    <span>Explore All Courses</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;