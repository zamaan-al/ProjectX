import React from "react";

const WhyProjectX = () => {
  const features = {
    left: [
      { title: "25+ Experience in", subtitle: "Ed Tech Sector" },
      { title: "Practical Focused", subtitle: "Training" },
      { title: "Future-Ready", subtitle: "Skills" },
      { title: "Proven Impact", subtitle: "" },
    ],
    right: [
      { title: "Unique Syllabus", subtitle: "to become an Innovator" },
      { title: "Onboarding Students", subtitle: "4th Onwards" },
      { title: "Expert Mentorship", subtitle: "Throughout the Training" },
      { title: "Creativity Unlocked", subtitle: "" },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0d587e] via-[#1857a3] to-[#0d587e] flex flex-col items-center justify-center px-6 py-16">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-20 mb-16 text-center sm:text-left md:mt-40">
        
        {/* Text Section */}
        <div className="sm:order-1 order-2">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl lg:mr-20 font-extrabold leading-snug">
            Why <br className="hidden sm:block" /> ProjectX?
          </h1>
        </div>

        {/* Question Mark Image */}
        <div className="sm:order-2 order-1 mb-6 sm:mb-0 w-24 sm:w-40 lg:w-52 h-auto lg:mr-20">
          <img
            src="/_.png" // replace with your actual image path
            alt="Question Mark"
            className="w-full h-auto object-contain opacity-90 mx-auto"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 text-center md:text-left">
          
          {/* Left Column */}
          <div className="space-y-8 md:space-y-10 lg:ml-40">
            {features.left.map((feature, i) => (
              <div key={i}>
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-gray-200 text-base sm:text-lg">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8 md:space-y-10 md:ml-20">
            {features.right.map((feature, i) => (
              <div key={i}>
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-gray-200 text-base sm:text-lg">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Divider (only visible on desktop) */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[1.5px] h-full bg-white/30"></div>
      </div>
    </div>
  );
};

export default WhyProjectX;
