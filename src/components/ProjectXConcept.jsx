import React from "react";

const ProjectXConcept = () => {
  return (
    <div className="relative bg-[#0B1726] text-white min-h-screen flex flex-col items-center py-16 px-6 overflow-hidden">
      {/* Title with full-width thick lines */}
      <div className="flex items-center w-full mb-12">
        {/* Left Line */}
        <div className="flex-grow h-[6px] bg-gray-500"></div>

        {/* Title */}
        <div className="px-8 text-center whitespace-nowrap">
          <h2 className="text-2xl sm:text-3xl font-light">The Concept Of</h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
            Project<span className="text-white">X</span>
          </h1>
        </div>

        {/* Right Line */}
        <div className="flex-grow h-[6px] bg-gray-500"></div>
      </div>

      {/* Description */}
      <p className="max-w-3xl text-center text-gray-300 text-sm sm:text-base leading-relaxed mb-12">
        An online platform where you can take up courses in various fields of
        technology. A free practical kit will be available to the students,
        along with the assistance of dedicated trainers. Starting with
        electronics at a basic level, we aim to build Indian Projects and
        produce skilled resources for the technology sector through our
        students.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-6xl w-full items-stretch relative z-10">
        {/* Card 1 */}
        <div className="relative bg-[#0F2239] rounded-xl p-8 text-center shadow-lg flex flex-col items-center h-full 
                        transition-transform duration-300 hover:scale-105 hover:bg-[#16314D]">
          {/* Semi-circle background inside Card 1 */}
          <div className="absolute -bottom-8 -left-8 w-[180px] h-[180px] rounded-full 
                          bg-[rgba(28,140,196,1)] opacity-40 blur-3xl pointer-events-none" />

          <img src="Explorer.svg" alt="Explore Technology" className="w-14 h-14 mb-6 relative z-10" />
          <h3 className="text-lg font-semibold mb-3 relative z-10">EXPLORE TECHNOLOGY</h3>
          <p className="text-sm text-gray-300 leading-relaxed relative z-10">
            We Learn, Practice and have fun. It gives a lot of satisfaction!
            Students will be able to do quick repairs of devices.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0F2239] rounded-xl p-8 text-center shadow-lg flex flex-col items-center h-full 
                        transition-transform duration-300 hover:scale-105 hover:bg-[#16314D]">
          <img src="Machine learning.svg" alt="Learn From Experts" className="w-14 h-14 mb-6" />
          <h3 className="text-lg font-semibold mb-3">LEARN FROM EXPERTS</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            This is the concept of Dr Hamza Anchumukkil, Founder of Bridco &
            Bridco. He also leads the online class.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0F2239] rounded-xl p-8 text-center shadow-lg flex flex-col items-center h-full 
                        transition-transform duration-300 hover:scale-105 hover:bg-[#16314D]">
          <img src="Video.svg" alt="Top Classes & Materials" className="w-14 h-14 mb-6" />
          <h3 className="text-lg font-semibold mb-3">TOP CLASSES & MATERIALS</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            It is a new learning method. All Courses are designed to enable and
            acquire electronic skills for all ages.
          </p>
        </div>
      </div>

      {/* ProjectX Kit Section - Aligned */}
      <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-1 z-10">
          Learn, Practice and Build
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-2 z-10">
          with ProjectX's Kit
        </h3>

        {/* Image */}
        <img
          src="60591267-aadb-4872-a37a-6f90d42d678c.png"
          alt="ProjectX Kit"
          className=""
        />

        {/* Paragraph */}
        <p className="text-sm md:text-base text-gray-300 italic leading-relaxed max-w-xl mb-24">
          Kids remember 80% of what they do, but only 20% of what they read.
          <br />
          Hands-on projects make learning unforgettable.
        </p>
      </div>
    </div>
  );
};

export default ProjectXConcept;
