import React from 'react';

const MilestoneTimeline = () => {
  const milestones = [
    { year: "2021", title: "Company Started", align: "right" },
    { year: "2021", title: "Online Platform", align: "left" },
    { year: "2022", title: "ProjectX Own App", align: "right" },
    { year: "2022", title: "ProjectX For Schools", align: "left" },
    { year: "2022", title: "Offline Programs", align: "right" },
    { year: "2023", title: "ProjectX E-Commerce", align: "left" },
    { year: "2023", title: "Texpo Best Startup Award", align: "right" },
    { year: "2023", title: "Powered By Britco", align: "left" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#041822] via-[#0f1c2d] to-[#053b57] flex items-center justify-center p-4 sm:p-8 overflow-x-hidden">
      <div className="max-w-4xl w-full relative md:pt-20 sm:pt-20">
        <h1 className="text-white text-3xl sm:text-5xl font-semibold text-center mb-10 sm:mb-16">
          Milestone
        </h1>

        <div className="relative">
          {/* Road Image */}
          <img
            src="dssdf.png"
            alt="Curved road path"
            className="w-full h-auto"
          />

          {/* Loop for all milestones except last */}
          <div className="absolute inset-0">
            {milestones.map((milestone, index) => {
              const topPosition = `${(index * 11) + 5}%`;
              const isLeft = milestone.align === "left";

              return (
                <div
                  key={index}
                  className={`absolute flex items-center ${
                    isLeft ? "left-0 pl-2 sm:pl-6" : "right-0 pr-2 sm:pr-6"
                  }`}
                  style={{ top: topPosition }}
                >
                  {isLeft ? (
                    <>
                      {/* Text + dotted line */}
                      <div className="flex items-center">
                        <div className="text-white text-xs sm:text-sm md:text-lg font-medium mr-1 sm:mr-3 whitespace-normal max-w-[120px] sm:max-w-none">
                          <span className="font-light">{milestone.year} | </span>
                          <span className="font-semibold">{milestone.title}</span>
                        </div>
                        <div className="border-t border-dotted border-cyan-500 w-8 sm:w-12 md:w-16"></div>
                      </div>
                      {/* Circle */}
                      <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
                        <div className="w-full h-full rounded-full border border-cyan-500"></div>
                        <div className="absolute inset-1 sm:inset-2 bg-cyan-500 rounded-full"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Circle */}
                      <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
                        <div className="w-full h-full rounded-full border border-cyan-500"></div>
                        <div className="absolute inset-1 sm:inset-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      {/* Dotted line + text */}
                      <div className="flex items-center">
                        <div className="border-t border-dotted border-cyan-500 w-8 sm:w-12 md:w-16"></div>
                        <div className="text-white text-xs sm:text-sm md:text-lg font-medium ml-1 sm:ml-3 whitespace-normal max-w-[120px] sm:max-w-none">
                          <span className="font-light">{milestone.year} | </span>
                          <span className="font-semibold">{milestone.title}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

         {/* 🚨 Separate Last Milestone (2024) */}
<div className="absolute bottom-6 sm:bottom-10 right-0 flex items-center -mb-7 -mr-4 sm:-mr-40">
  {/* Circle */}
  <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
    <div className="w-full h-full rounded-full border border-cyan-500"></div>
    <div className="absolute inset-1 sm:inset-2 bg-cyan-500 rounded-full"></div>
  </div>

  {/* Dotted line + text */}
  <div className="flex items-center ml-2 sm:ml-3">
    <div className="border-t border-dotted border-cyan-500 w-8 sm:w-12 md:w-16"></div>
    <div className="text-white text-xs sm:text-sm md:text-lg font-medium ml-1 sm:ml-3 whitespace-normal max-w-[130px] sm:max-w-none leading-snug">
      <span className="font-light">2024 | </span>
      <span className="font-semibold">
        Excellgentia - The Largest Tech Expo in Kerala
      </span>
    </div>
  </div>
</div>
          {/* End Last */}
        </div>
      </div>
    </div>
  );
};

export default MilestoneTimeline;
