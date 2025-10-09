import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) closeMenu();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !e.target.closest("#mobile-menu-button")
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
    <header className="fixed top-0 left-0 w-full z-50 bg-black px-4 sm:px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo Section - Match Hero layout */}
        <div className="flex items-center space-x-2">
          <img
            src="ProjectX Logo white 1.png"
            alt="ProjectX"
            className="h-8 sm:h-12 md:h-16 w-auto"
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

        {/* Mobile Toggle Button */}
        <button
          id="mobile-menu-button"
          className="md:hidden p-2 text-white"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
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

      {/* Mobile Menu */}
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
  );
};

export default Nav;
