import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const menuRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle scroll to change navbar background & close mobile menu
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 1000;
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / maxScroll, 1);
      setScrollOpacity(opacity);
      closeMenu(); // Close mobile menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click (ignoring toggle button)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#mobile-menu-button")
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <img src="/freepik__candid-photography-with-natural-textures-and-highl__53773.png"
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat "
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-blue z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10 sm:from-black/40"></div>

      {/* Header */}
      <header
        className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-4 sm:px-6 py-4"
        style={{
          backgroundColor: `rgba(5, 15, 25, ${scrollOpacity})`,
          backdropFilter: scrollOpacity > 0 ? "blur(6px)" : "none",
        }}
      >
        <nav className="flex items-center justify-between max-w-7xl w-full mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="ProjectX Logo white 1.png"
              alt="ProjectX"
              className="h-8 sm:h-12 md:h-16 lg:h-16 w-auto"
            />
            <img
              src="logo 3.png"
              alt="Bridge"
              className="h-8 sm:h-12 md:h-16 lg:h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/aboutus", label: "Our Story" },
              { to: "/services", label: "Services" },
              { to: "/courses", label: "Courses" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
                className="hover:text-blue-200 text-xs sm:text-sm font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
            <HashLink
              smooth
              to="#footer"
              onClick={closeMenu}
              className="hover:text-blue-200 text-xs sm:text-sm font-medium text-white"
            >
              Contact Us
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden p-2 text-white"
            onClick={(e) => {
              e.stopPropagation(); // Prevent bubbling to document
              setIsMenuOpen((prev) => !prev);
            }}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden mt-4 bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-3 mx-4 sm:mx-0"
          >
            {[
              { to: "/", label: "Home" },
              { to: "/aboutus", label: "Our Story" },
              { to: "/services", label: "Services" },
              { to: "/courses", label: "Courses" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
                className="block hover:text-blue-200 py-2 text-sm text-white"
              >
                {item.label}
              </Link>
            ))}
            <HashLink
              smooth
              to="#footer"
              onClick={closeMenu}
              className="block hover:text-blue-200 py-2 text-sm text-white"
            >
              Contact Us
            </HashLink>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <main className="relative z-20 flex flex-col items-center sm:items-start justify-center flex-1 px-4 sm:px-6 pt-60 sm:pt-40 lg:pt-72 max-w-7xl mx-auto text-center sm:text-left">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-2xl">
          Your Child <br />
          <span className="text-blue-200">Our Innovator</span>
        </h1>


        <Link to="/courses">
          <button className="mt-6 sm:mt-8 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition text-base sm:text-lg">
            Explore All Courses
          </button>
        </Link>

      </main>
    </div>
  );
};

export default HeroSection;
