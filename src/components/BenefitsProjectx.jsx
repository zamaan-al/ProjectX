import React from "react";

const BenefitsProjectX = () => {
  const benefits = [
    { title: "Acquire technical skill", text: "ProjectX is taking technology achievements to a whole new level as we engage in a Guinness Participation Record attempt at our upcoming Grand Convocation Ceremony." },
    { title: "Enhance critical & logical thinking", text: "ProjectX is taking technology achievements to a whole new level as we engage in a Guinness Participation Record attempt at our upcoming Grand Convocation Ceremony." },
    { title: "Technical Creative Mindset", text: "ProjectX is taking technology achievements to a whole new level as we engage in a Guinness Participation Record attempt at our upcoming Grand Convocation Ceremony." },
    { title: "Make own Products", text: "ProjectX is taking technology achievements to a whole new level as we engage in a Guinness Participation Record attempt at our upcoming Grand Convocation Ceremony." },
    { title: "Increase the IQ level", text: "ProjectX is taking technology achievements to a whole new level as we engage in a Guinness Participation Record attempt at our upcoming Grand Convocation Ceremony." },
    { title: "Problem solving Skill", text: "ProjectX is taking technology achievements to a whole new level as we engage in a Guinness Participation Record attempt at our upcoming Grand Convocation Ceremony." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d587e] via-[#1857a3] to-[#0b77ac] flex flex-col items-center justify-center px-6 py-20">
      
      {/* Benefits Section */}
      <div className="mt-28 bg-[#0B1726]/40 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-6xl py-20 px-6 sm:px-12">
        <h2 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-16">
          Benefits You’ll <br /><br className="sm:hidden"/> Gain at ProjectX
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 sm:p-10 min-h-[240px] flex flex-col items-center justify-center text-center space-y-4"
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{benefit.text}</p>
            </div>
          ))}

          {/* Vertical Lines (only on lg) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-px bg-white/30"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-2/3 w-px bg-white/30"></div>

          {/* Horizontal Line (only on lg) */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-px bg-white/30"></div>

          {/* Tablet (sm) - one vertical line in middle */}
          <div className="hidden sm:block lg:hidden absolute top-0 bottom-0 left-1/2 w-px bg-white/30"></div>

          {/* Tablet (sm) - one horizontal line in middle */}
          <div className="hidden sm:block lg:hidden absolute left-0 right-0 top-1/2 h-px bg-white/30"></div>
        </div>
      </div>

      {/* Classes Section */}
      <div className="mt-32 w-full max-w-7xl px-6 lg:px-20 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12">
          Classes to get you <br /> feeling the burn.
        </h2>

        {/* Content */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between w-full gap-12">
          {/* Left: Text */}
          <p className="text-gray-200 text-base leading-relaxed max-w-md text-center lg:text-left">
            The ProjectX application helps students in learning and development. 
            The app offers quick video tutorials to learn new ideas, live classrooms 
            where you can speak with instructors, mentors, and teachers, and flip 
            through concepts and tales to review and reinforce your fundamentals. 
            Includes technical-related live sessions and events, gives straightforward 
            and eye-catching UI and UX designs, offers free technical community groups, 
            offers exclusive technical-based courses to students from Kerala, and 
            offers an E-commerce gateway for convenient learning.
          </p>

          {/* Center: Phone Image Placeholder */}
          <div className="flex items-center justify-center">
            <img 
              src="app.png" 
              alt="App Preview" 
              className="object-cover w-full h-full" 
            />
          </div>

          {/* Right: Download Buttons */}
          <div className="flex flex-col space-y-6">
  {/* Android Button */}
  <button
    className=" w-60 px-6 py-3 bg-black text-white rounded-full font-medium shadow-lg border border-gray-700
               hover:scale-105 hover:shadow-2xl hover:shadow-black/40
               active:scale-95 active:shadow-inner
               transition-all duration-300 ease-out"
  >
    Download it for <span className="font-bold">Android</span>
  </button>

  {/* iOS Button */}
  <button
    className="px-6 py-3 bg-white text-black rounded-full font-medium shadow-lg border border-gray-300
               hover:scale-105 hover:shadow-2xl hover:shadow-white/30
               active:scale-95 active:shadow-inner
               transition-all duration-300 ease-out"
  >
    Download it for <span className="font-bold">iOS</span>
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default BenefitsProjectX;
