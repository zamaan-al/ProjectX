import React from 'react'

const FoundersStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#053b57] via-[#628b9d] to-[#5a94ad] flex flex-col items-center justify-center px-4 sm:px-8 md:px-8 pt-10 md:pt-60 py-16">
      {/* Title */}
      <h1 className="text-white text-4xl md:text-5xl font-light text-center mb-16">
        Founders Story
      </h1>
      
      {/* Founders Container */}
      <div className="max-w-5xl w-full  space-y-20 pl-0 md:pl-32 md:pt-20">
        
        {/* First Founder */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 text-center md:text-left">
          {/* Photo Placeholder */}
          <div className="w-60 h-72 bg-gray-300 rounded-2xl flex-shrink-0 mb-6 md:mb-0"></div>
          
          {/* Content */}
          <div className="flex-1 text-white">
            <h2 className="text-2xl md:text-3xl font-medium mb-3">
              Dr. Hamza Anchumukkil
            </h2>
            <p className="text-lg md:text-xl font-light mb-6 opacity-90">
              Founder
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed opacity-90">
              By teaching students about the future technologies, we intend<br />
              to prep them for their future. By learning about the potential<br />
              opportunities in the fast evolving world of technology, students<br />
              should be able to build a good career as well as contribute to<br />
              the growing world themselves.
            </p>
          </div>
        </div>

        {/* Second Founder */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 text-center md:text-left">
          {/* Photo Placeholder */}
          <div className="w-60 h-72 bg-gray-300 rounded-2xl flex-shrink-0 mb-6 md:mb-0"></div>
          
          {/* Content */}
          <div className="flex-1 text-white">
            <h2 className="text-2xl md:text-3xl font-medium mb-3">
              Muhammed Shameem Elanthi
            </h2>
            <p className="text-lg md:text-xl font-light mb-6 opacity-90">
              Co-Founder, CEO
            </p>
            <p className="text-base md:text-lg font-light leading-relaxed opacity-90">
              By teaching students about the future technologies, we intend<br />
              to prep them for their future. By learning about the potential<br />
              opportunities in the fast evolving world of technology, students<br />
              should be able to build a good career as well as contribute to<br />
              the growing world themselves.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FoundersStory
