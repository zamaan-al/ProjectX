import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-b from-[#0b77ac] via-[#1857a3] to-[#0b77ac] text-white px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto bg-[#000000] rounded-2xl sm:rounded-3xl px-6 sm:px-12 py-8 sm:py-16 flex flex-col justify-between shadow-2xl">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">

          {/* Left Section: Logo + Socials */}
          <div className="flex flex-col items-center lg:mt-20 lg:ml-10 order-1 lg:order-1">
            <img
              src="/ProjectX Logo white 1.png"
              alt="ProjectX Logo"
              className="h-16 sm:h-20 md:h-24 object-contain mb-4"
            />
            <div className="flex space-x-4 sm:space-x-5">
              {/* Social icons here */}
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-7 lg:mr-10 text-sm order-3 lg:order-2">
            <Link to="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
            <Link to="/aboutus" className="hover:text-gray-300 transition-colors duration-200">Our Story</Link>
            <Link to="/courses" className="font-semibold hover:text-gray-300 transition-colors duration-200">Courses</Link>
            <Link to="/blog" className="hover:text-gray-300 transition-colors duration-200">Blog</Link>
            <Link to="/gallery" className="hover:text-gray-300 transition-colors duration-200">Gallery</Link>
            <HashLink smooth to="#footer" className="hover:text-gray-300 transition-colors duration-200">Contact Us</HashLink>
          </div>

          {/* Right Section: Contact Info */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 lg:mt-14 lg:mr-12 lg:pr-10 text-sm order-2 lg:order-3 w-full lg:w-auto">
            <h3 className="font-semibold text-base sm:text-lg">Get in touch</h3>
            <div className="flex items-start space-x-3 text-center lg:text-left">
              {/* Location */}
              <svg className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <p className="leading-relaxed">1st Floor, Smart Trade City<br />Kotakkal, Malappuram<br />Kerala 676503</p>
            </div>

            <div className="flex items-center space-x-3">
              {/* Phone */}
              <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.61a1 1 0 011 1c0 1.26.2 2.5.57 3.54a1 1 0 01-.21 1.11l-2.35 2.34z" />
              </svg>
              <p>+91 96587 72255</p>
            </div>

            <div className="flex items-center space-x-3">
              {/* Email */}
              <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <p>info@projectxedu.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 sm:mt-8 text-center text-xs text-gray-400">
          Copyright 2024, ProjectX
        </div>
      </div>
    </footer>
  );
};

export default Footer;
