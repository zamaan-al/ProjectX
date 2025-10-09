import React from 'react';

const FoundersStory = () => {
  // Text content with \n for desktop line breaks
  const descriptionText = `By teaching students about the future technologies, we intend
to prep them for their future. By learning about the potential
opportunities in the fast evolving world of technology, students
should be able to build a good career as well as contribute to
the growing world themselves.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#053b57] via-[#628b9d] to-[#5a94ad] flex flex-col items-center justify-center px-4 sm:px-8 md:px-8 pt-10 md:pt-60 py-16">
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-16">
        Founders Story
      </h1>

      {/* Founders Container */}
      <div className="max-w-5xl w-full space-y-16 sm:space-y-20 pl-0 md:pl-32 md:pt-20">
        
        {/* First Founder */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 text-center md:text-left">
          {/* Photo */}
          <img
            src=" WhatsApp Image 2025-10-07 at 21.24.11_5a4e7b5e.jpg"
            alt="Dr. Hamza Anchumukkil"
            className="w-52 sm:w-60 h-64 sm:h-72 rounded-2xl flex-shrink-0 mb-4 md:mb-0 object-cover shadow-lg transition-transform duration-300"
          />

          {/* Content */}
          <div className="flex-1 text-white px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3">
              Dr. Hamza Anchumukkil
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light mb-4 sm:mb-6 opacity-90">
              Founder
            </p>
            <p
              className="text-sm sm:text-base md:text-lg font-light leading-relaxed opacity-90 whitespace-normal md:whitespace-pre-line"
            >
              {descriptionText}
            </p>
          </div>
        </div>

        {/* Second Founder */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 text-center md:text-left">
          {/* Photo */}
          <img
            src="WhatsApp Image 2025-10-07 at 21.24.11_0990d470.jpg"
            alt="Muhammed Shameem Elanthi"
            className="w-52 sm:w-60 h-64 sm:h-72 rounded-2xl flex-shrink-0 mb-4 md:mb-0 object-cover shadow-lg transition-transform duration-300 "
          />

          {/* Content */}
          <div className="flex-1 text-white px-2 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3">
              Muhammed Shameem Elanthi
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light mb-4 sm:mb-6 opacity-90">
              Co-Founder, CEO
            </p>
            <p
              className="text-sm sm:text-base md:text-lg font-light leading-relaxed opacity-90 whitespace-normal md:whitespace-pre-line"
            >
              {descriptionText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersStory;
