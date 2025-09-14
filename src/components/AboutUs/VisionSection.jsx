import React from "react";

const VisionSection = () => {
  return (
    <section className=" bg-gradient-to-b from-[#000000] via-[#0f1c2d] to-[#041822] text-white px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center pt-5">
        
        {/* Left side (Rocket image with background shape) */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="bg-[#FFFFFF80] rounded-t-full p-4 w-56 h-80 md:w-72 md:h-96 flex items-end justify-center">
            <img
              src="3ececeb4-4347-4c93-a2f9-be6eb1a7d456.png"
              alt="Rocket"
              className="h-80 md:h-88 max-w-full object-contain translate-y-24 md:translate-y-24"
            />
          </div>
        </div>
        
        {/* Right side (Text content) */}
        <div>
          {/* Heading with underline */}
          <div className="flex items-center gap-4 mb-6 mt-0 md:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold">Vision</h2>
            <div className="flex-1 h-2 bg-blue-600 rounded"></div>
          </div>
          
          {/* Description */}
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg text-justify pt-6 md:pt-12">
            An online platform where you can take up courses in various fields
            of technology. A free practical kit will be available to the
            students, along with the assistance of dedicated trainers. Starting
            with electronics at a basic level, we aim to build Indian projects
            and produce skilled resources for the technology sector through our
            students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
