import React from "react";

const AboutSection = () => {
  return (
    <section className=" bg-gradient-to-b from-[#000000] via-[#0c161c] to-[#000000] text-white px-4 sm:px-6 md:px-10 py-16 flex justify-center mt-16">
      <div className="w-full max-w-4xl bg-[#082939]
 rounded-2xl sm:rounded-3xl shadow-2xl relative">
        
        {/* Cutting piece heading (centered like a proper heading) */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-black px-6 py-2 rounded-b-2xl shadow-lg mt-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
            About Us
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 mt-10">
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg text-justify p-6">
            We are ProjectX, the first hybrid technical education system in
            India and the Middle East. Established in the year 2021 at
            Kottakkal, Kerala, ProjectX is a company recognized by Startup India
            and Startup Mission Kerala. ProjectX is initiated by Buzy 2050, a
            business consultancy and startup incubation firm from Malappuram,
            Kerala. A strong and reputed team of Dr. Hamza Anchumukkil. Today we
            are a trusted learning resource covering core subjects in technology
            like electronics, robotics, drone technology, and more. Extending our
            service to thousands of innovators around India and the Middle East
            and expanding our hybrid learning system, we strive to help kids
            develop creative contrast and collaborate as they explore and
            contribute to their future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
