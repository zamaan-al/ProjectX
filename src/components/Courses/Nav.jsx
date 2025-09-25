import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // 👇 Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-black text-white px-4 sm:px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between max-w-7xl w-full">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="ProjectX Logo white 1.png"
            alt="ProjectX"
            className="h-8 sm:h-12 md:h-16 lg:h-16 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="hover:text-blue-200 text-xs sm:text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="hover:text-blue-200 text-xs sm:text-sm font-medium"
          >
            Our Story
          </Link>
          <Link
            to="/services"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="hover:text-blue-200 text-xs sm:text-sm font-medium"
          >
            Services
          </Link>
          <Link
            to="/courses"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="hover:text-blue-200 text-xs sm:text-sm font-medium"
          >
            Courses
          </Link>

          {/* 👇 Smooth scroll to footer only */}
          <HashLink
            smooth
            to="#footer"
            onClick={closeMenu}
            className="hover:text-blue-200 text-xs sm:text-sm font-medium"
          >
            Contact Us
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="md:hidden mt-4 bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-3 mx-4 sm:mx-0">
          <Link
            to="/"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="block hover:text-blue-200 py-2 text-sm"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="block hover:text-blue-200 py-2 text-sm"
          >
            Our Story
          </Link>
          <Link
            to="/services"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="block hover:text-blue-200 py-2 text-sm"
          >
            Services
          </Link>
          <Link
            to="/courses"
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
            className="block hover:text-blue-200 py-2 text-sm"
          >
            Courses
          </Link>
          <HashLink
            smooth
            to="#footer"
            onClick={closeMenu}
            className="block hover:text-blue-200 py-2 text-sm"
          >
            Contact Us
          </HashLink>
        </div>
      )}
    </header>
  );
};

export default Nav;
