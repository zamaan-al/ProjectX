import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-[#0b77ac] via-[#1857a3] to-[#0b77ac] text-white px-4 sm:px-6 py-12 sm:py-20"
    >
      <div className="max-w-7xl mx-auto bg-[#000000] rounded-2xl sm:rounded-3xl px-6 sm:px-12 py-8 sm:py-16 flex flex-col justify-between shadow-2xl">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">

          {/* Left Section: Logo + Socials */}
          <div className="flex flex-col items-center lg:mt-20 lg:ml-10 order-1 lg:order-1 w-full lg:w-auto">
            {/* Logo */}
            <img
              src="/ProjectX Logo white 1.png"
              alt="ProjectX Logo"
              className="h-16 sm:h-20 md:h-24 object-contain mb-4"
            />

            {/* Social Media Icons */}
            <div className="flex justify-between items-center w-[250px] sm:max-w-[220px]">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img src="/Facebook (1).png" alt="Facebook" className="w-6 sm:w-8" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img src="/Twitter.png" alt="X" className="w-6 sm:w-8" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-6 sm:w-8 invert brightness-[0.2] saturate-0 contrast-[0.5] hover:brightness-200 transition duration-300"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <img src="/Youtube.png" alt="YouTube" className="w-7 sm:w-8" />
              </a>
            </div>
          </div>
          {/* Middle Section: Links */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-7 text-sm 
                order-2 lg:order-2 w-full lg:w-auto mr-0 lg:mr-2  mt-4 lg:mt-15">
            <Link
              to="/"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Our Story
            </Link>
            <Link
              to="/courses"
              className="font-semibold hover:text-gray-300 transition-colors duration-200"
            >
              Courses
            </Link>
            <HashLink
              smooth
              to="#footer"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Contact Us
            </HashLink>
          </div>




          {/* Right Section: Contact Info */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 lg:mt-14 lg:mr-40 lg:pr-10 text-sm order-3 lg:order-3 w-full lg:w-auto mt-6 ">
            <h3 className="font-semibold text-base sm:text-lg  ">Get in touch</h3>

            <div className="flex items-start space-x-3 text-center ml-1 lg:text-left">
              {/* Location */}
              <img
                src="/Location.png"
                className="h-4 w-5 sm:h-5 sm:w-6 mt-1 flex-shrink-0"
                alt="Location"
              />

              <p className="leading-relaxed ml-1">
                1st Floor, Smart Trade City
                <br />
                Kotakkal, Malappuram
                <br />
                Kerala 676503
              </p>
            </div>

            <div className="flex items-center ml-1 space-x-3">
              {/* Phone */}
              <img
                src="/Phone.png"
                className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0"
                alt="Phone"
              />
              <p className="ml-2">+91 96587 72255</p>
            </div>

            <div className="flex ml-1 items-center space-x-3">
              {/* Email */}
              <img
                src="/Mail inbox app.png"
                className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0"
                alt="Mail"
              />
              <p className="ml-2">info@projectxedu.com</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-15 sm:mt-8 text-center text-xs text-gray-400">
          Copyright 2024, ProjectX
        </div>
      </div>
    </footer>
  );
};

export default Footer;
