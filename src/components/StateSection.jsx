import React from "react";

const StatsSection = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-30  bg-gradient-to-b from-[#000000] via-[#0f1c2d] to-[#041822] text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Top Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full lg:w-[450px] h-64 sm:h-72 lg:h-80 flex shadow-lg">
            <div className="absolute inset-0 bg-[rgba(20,74,101,0.6)]"></div>
            
            {/* Background (image + blue section) */}
            <div className="w-1/2 h-full">
              <img
                src="medium-shot-boy-with-smartphone.jpg"
                alt="Child Innovation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 h-full bg-[rgba(20,74,101,1)]"></div>
            
            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center">
              <p className="text-sm sm:text-lg lg:text-xl font-normal leading-relaxed">
                Tired of Your Child Wasting{" "}
                <span className="font-bold">Hours on Screens?</span>
                <br />
                Turn it into <span className="font-bold">Innovation!</span>
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden w-full lg:w-[450px] h-64 sm:h-72 lg:h-80 flex shadow-lg">
            <div className="absolute inset-0 bg-[rgba(20,74,101,0.6)]"></div>
            <div className="w-1/2 h-full">
              <img
                src="full-shot-mother-sitting-floor.jpg"
                alt="Child Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 h-full bg-[rgba(20,74,101,1)]"></div>
            
            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center">
              <p className="text-sm sm:text-lg lg:text-xl font-normal leading-relaxed">
                Is Your Child <span className="font-bold">Breaking Toys?</span>
                <br />
                At ProjectX, They{" "}
                <span className="font-bold">Build Their Own!</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Box */}
        <div className="relative rounded-xl border border-white py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-20 text-center mt-12 sm:mt-20 lg:mt-28 min-h-[240px] sm:min-h-[280px] lg:h-[300px] bg-gradient-to-r from-black via-black to-transparent">
          {/* Glow Gradient with rgba(20,74,101,1) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(20,74,101,0.8)] rounded-xl"></div>
          
          {/* Title inside border */}
          <h2 className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-black px-3 sm:px-4 text-base sm:text-lg lg:text-xl font-medium text-center max-w-[90%] sm:max-w-none">
            4 Years, We Proved,{" "}
            <span className="font-bold italic">Its Possible!!</span>
          </h2>
          
          {/* Stats */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">10K+</h3>
              <p className="text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-2">Students</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">40+</h3>
              <p className="text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-2">Schools</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">08+</h3>
              <p className="text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-2">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;