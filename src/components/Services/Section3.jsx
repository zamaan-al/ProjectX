
import React from "react";

const ProjectXEcommerce = () => {
  return (
    <section className=" bg-gradient-to-br from-[#0B1726] via-[#0B1726] to-[#0B1726] min-h-screen flex items-center justify-center px-6 py-16">
        {/* Centered container */}
            <div className="max-w-7xl mx-auto">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Content */}
<div className="flex-1 text-white text-center md:text-left">
  <h2 className="w-full text-2xl text-white py-3 rounded-lg mb-5">
    ProjectX <span className="ml-3">|</span>
    <span className="ml-3">E-Commerce</span>
  </h2>

  <p className="mt-10 max-w-[350px] mx-auto md:mx-0 text-base leading-relaxed text-gray-200 text-justify">
    An online platform where you can take up courses in various fields
    of technology. A free practical kit will be available to the
    students, along with the assistance of dedicated trainers. Starting
    with electronics at a basic level, We aim to build Indian Projects
    and produce skilled resources for the technology sector through our
    students.
  </p>
</div>


       {/* Right Content (Image with D-shape mask) */}
<div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
  <div className="w-[300px] h-[250px] sm:w-[320px] sm:h-[280px] md:w-[350px] md:h-[350px] overflow-hidden rounded-l-full">
    <img
      src="/ProjectXEcommerce.jpg" // replace with your image path
      alt="E-Commerce"
      className="w-full h-full object-cover"
    />
  </div>
</div>




      </div>
      {/* Divider Line */}
                <div className=" mt-20 flex justify-center lg:justify-start lg:ml-[20px]">
                    <div className="w-full max-w-[680px] border-t border-[#ffffff]/50"></div>
                </div>
      </div>
    </section>
  );
};

export default ProjectXEcommerce;
