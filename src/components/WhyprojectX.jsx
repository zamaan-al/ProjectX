import React from "react";

const WhyProjectX = () => {
  const features = [
    {
      left: [
        { title: "25+ Experience in", subtitle: "Ed Tech Sector" },
        { title: "Practical Focused", subtitle: "Training" },
        { title: "Future-Ready", subtitle: "Skills" },
        { title: "Proven Impact", subtitle: "" }
      ],
      right: [
        { title: "Unique Syllabus", subtitle: "to become an Innovator" },
        { title: "Onboarding Students", subtitle: "4th Onwards" },
        { title: "Expert Mentorship", subtitle: "Throughout the Training" },
        { title: "Creativity Unlocked", subtitle: "" }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0d587e] via-[#1857a3] to-[#0d587e] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
      
      {/* Title Section */}
      <div className="flex flex-col-reverse sm:flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-6xl mb-16 gap-10">
        {/* First Heading */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left">
          Why <br className="hidden sm:block" /> ProjectX?
        </h1>

        {/* SVG */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 opacity-90">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M8 8a4 4 0 0 1 8 0c0 2.5-4 3.5-4 6"
              stroke="#9CA3AF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="20" r="3" fill="#9CA3AF" />
          </svg>
        </div>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {features[0].left.map((feature, index) => (
              <div key={`left-${index}`} className="text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-base sm:text-lg text-gray-200">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {features[0].right.map((feature, index) => (
              <div key={`right-${index}`} className="text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-base sm:text-lg text-gray-200">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Line Separator (desktop only) */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[2px] h-96 bg-[#f9f2f2] opacity-30"></div>
      </div>
    </div>
  );
};

export default WhyProjectX;
