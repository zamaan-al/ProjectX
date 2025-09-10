import React from "react";

const InnovatorJourney = () => {
  const steps = [
    { level: "LEVEL\n1", label: "Junior\nInnovator", left: "19%", lineHeight: "h-12", offset: "210px" },
    { level: "LEVEL\n2", label: "Young\nInnovator", left: "35%", lineHeight: "h-18", offset: "187px" },
    { level: "LEVEL\n3", label: "Master\nInnovator", left: "50%", lineHeight: "h-24", offset: "162px" },
    { level: "LEVEL\n4", label: "Product\nDeveloper", left: "65%", lineHeight: "h-32", offset: "130px" },
    { level: "LEVEL\n5", label: "Startup\nFounder", left: "80%", lineHeight: "h-40", offset: "98px" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B1726] via-[#093367] to-[#0d587e] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">
        Our <span className="font-black">Innovator Journey</span>
      </h1>

      {/* Graph Container */}
      <div className="relative w-full max-w-6xl mx-auto pb-48">
        <img
          src="innovator.png"
          alt="Innovator Journey Graph"
          className="w-full h-auto"
        />

        {/* LEVEL text - positioned on the diagram bars */}
        {/* {steps.map((step, index) => (
          <div
            key={index}
            className="absolute text-center text-white font-bold whitespace-pre-line text-xs sm:text-sm md:text-base lg:text-lg transform -translate-x-1/2"
            style={{ 
              left: step.left, 
              top: '45%'
            }}
          >
            {step.level}
          </div>
        ))} */}

        {/* Dotted Lines + Stage Labels */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center text-center"
            style={{
              left: step.left,
              bottom: `calc(-120px + ${step.offset})`,
              transform: "translateX(-50%)",
            }}
          >
            <div className={`border-l-2 border-dotted border-white ${step.lineHeight}`}></div>

            <p className="text-white text-xs sm:text-sm md:text-base font-semibold mt-2 leading-snug whitespace-pre-line w-20 sm:w-24 md:w-28 break-words">
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnovatorJourney;