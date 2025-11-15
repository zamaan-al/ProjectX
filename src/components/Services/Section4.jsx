// Workshops.jsx
import React from "react";

const Workshops = () => {
  return (
    <section className="bg-gradient-to-b from-[#0B1726] via-[#093367] to-[#0d587e]   text-white py-16 px-6 lg:px-20">
      {/* Centered container */}
      <div className="max-w-7xl mx-auto">
        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Mask group (3).png"
              alt="Workshop"
              className="w-[260px] h-[250px] 
      sm:w-[300px] sm:h-[280px] 
      md:w-[380px] md:h-[300px] 
      lg:w-[350px] lg:h-[365px]
      object-cover 
      shadow-lg
      rounded-2xl rounded-bl-none"
            />
          </div>


          {/* Right: Content */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[350px]">
              {/* Heading outside the box */}
              <h3 className="w-full bg-[#14648D]/50 text-white px-6 py-3 rounded-lg mb-5 text-center">
                ProjectX <span className="ml-3">|</span>
                <span className="ml-3">Workshops</span>
              </h3>


              {/* Content Box */}
              <div className="w-full bg-[#082634] p-6 sm:p-8 rounded-2xl shadow-md">
                <p
                  className="text-gray-300 leading-relaxed text-sm sm:text-base text-justify"
                  style={{ hyphens: 'auto', textAlignLast: 'left' }}
                >
                  An online platform where you can take up courses in various
                  fields of technology. A free practical kit will be available
                  to the students, along with the assistance of dedicated trainers.
                  Starting with electronics at a basic level, we aim to build Indian
                  projects and produce skilled resources for the technology sector
                  through our students.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className=" mt-20 flex justify-center lg:justify-start lg:ml-[300px]">
          <div className="w-full max-w-[670px] border-t border-[#ffffff]/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
