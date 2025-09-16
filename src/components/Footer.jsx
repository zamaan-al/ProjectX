import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1C8CC4] via-[#1C8CC4] to-[#1C8CC4] text-white px-4 sm:px-6 py-12 sm:py-20">
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
              {/* Facebook */}
              <a
                href="#"
                className="hover:opacity-80 transition duration-200"
              >
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background square with black fill + white border */}
                  <rect x="1" y="1" width="22" height="22" fill="black" stroke="white" strokeWidth="2" rx="2" />

                  {/* Facebook "f" logo */}
                  <path
                    d="M15.12 8.5H13.5c-.38 0-.75.31-.75.69V11h2.25l-.34 2.5h-1.91V21h-2.5v-7.5H8.5V11h2.25V8.94c0-1.79 1.42-3.19 3.25-3.19h1.12v2.75z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* X */}
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.938 13.938 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.555 4.902 4.902 0 0 1-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.593 3.417A9.867 9.867 0 0 1 0 19.54a13.924 13.924 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.976 1.257 2.243 1.32 3.608.058 1.266.069 1.645.069 4.847 0 3.204-.012 3.584-.07 4.85-.062 1.366-.344 2.633-1.32 3.608-.976.975-2.243 1.257-3.608 1.32-1.266.058-1.645.069-4.847.069-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.344-3.608-1.32-.975-.976-1.257-2.243-1.32-3.608C2.175 15.747 2.163 15.368 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.344-2.633 1.32-3.608.976-.975 2.243-1.257 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.014 7.052.072 5.768.13 4.548.422 3.515 1.455c-1.033 1.033-1.326 2.253-1.384 3.537C2.014 6.332 2 6.735 2 10c0 3.265.014 3.668.072 4.948.058 1.284.35 2.504 1.384 3.537 1.033 1.033 2.253 1.326 3.537 1.384 1.28.058 1.683.072 4.948.072s3.668-.014 4.948-.072c1.284-.058 2.504-.35 3.537-1.384 1.033-1.033 1.326-2.253 1.384-3.537.058-1.28.072-1.683.072-4.948s-.014-3.668-.072-4.948c-.058-1.284-.35-2.504-1.384-3.537C19.452.422 18.232.13 16.948.072 15.668.014 15.265 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="hover:opacity-80 transition duration-200">
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* YouTube rounded rectangle shape */}
                  <path
                    d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.5 12 3.5 12 3.5s-7 0-9.1.3c-1.2.3-2.1 1.2-2.4 2.4C0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4C5 20.5 12 20.5 12 20.5s7 0 9.1-.3c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8z"
                    fill="black"
                    stroke="white"
                    strokeWidth="1.5"
                  />

                  {/* Play triangle */}
                  <polygon points="9.5,8 9.5,16 16,12" fill="white" />
                </svg>

              </a>
            </div>
          </div>

          {/* Middle Section: Links - Order 3 on mobile, 2 on desktop */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-7 lg:mr-10 text-sm order-3 lg:order-2">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Our Story</a>
            <a href="#" className="font-semibold hover:text-gray-300 transition-colors duration-200">Courses</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Blog</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Gallery</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact Us</a>
          </div>

          {/* Right Section: Contact Info - Order 2 on mobile, 3 on desktop */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 lg:mt-14 lg:mr-12 lg:pr-10 text-sm order-2 lg:order-3 w-full lg:w-auto">
            <h3 className="font-semibold text-base sm:text-lg">Get in touch</h3>

            {/* Location */}
            <div className="flex items-start space-x-3 text-center lg:text-left">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <p className="leading-relaxed">1st Floor, Smart Trade City<br />Kotakkal, Malappuram<br />Kerala 676503</p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.61a1 1 0 011 1c0 1.26.2 2.5.57 3.54a1 1 0 01-.21 1.11l-2.35 2.34z" />
              </svg>
              <p>+91 96587 72255</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
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