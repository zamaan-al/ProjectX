// HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#01090f] to-[#03131e] py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="mt-16 sm:mt-20 text-3xl sm:text-4xl md:text-5xl  text-white">
          Our Services
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-16 md:mt-28">
        {/* Left Side (Text) */}
        <div className="flex-1 text-white text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            ProjectX <span className="font-light">| Edu</span>
          </h3>
          <p className="text-base leading-relaxed text-gray-300 max-w-lg mx-auto md:mx-0">
            An online platform where you can take up courses in various fields of
            technology. A free practical kit will be available to the students,
            along with the assistance of dedicated trainers. Starting with
            electronics at a basic level, we aim to build Indian Projects and
            produce skilled resources for the technology sector through our
            students.
          </p>
        </div>

        {/* Right Side (Image with D-shape) */}
        <div className="flex-1 flex justify-center">
          <img
            src="/level4.png"
            alt="Kid building a robot"
            className="
              w-[260px] h-[260px] 
              sm:w-[300px] sm:h-[300px] 
              md:w-[380px] md:h-[380px] 
              lg:w-[420px] lg:h-[420px] 
              object-cover shadow-lg 
              [clip-path:inset(0%_0%_0%_0%_round_50%_0_0_50%)]
            "
          />
        </div>
      </div>

      {/* Divider Line */}
                <div className=" mt-12 flex justify-center lg:justify-start lg:ml-[300px]">
                    <div className="w-full max-w-[670px] border-t border-[#ffffff]/50"></div>
                </div>
    </section>
  );
};

export default HeroSection;
