import React from "react";



const MapSlide = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-b from-[#5a94ad] via-[#1857a3] to-[#0b77ac]  text-white px-6 py-12">

      {/* Header */}
      <header className="w-full max-w-6xl text-center mt-8 md:mt-20">
        <h2 className="text-3xl md:text-4xl font-light">Connecting the Dots</h2>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2">through Innovators</h1>
      </header>

      {/* Map container */}
      <div className="w-full max-w-5xl flex-1 flex items-center justify-center py-8 md:py-14">
        {/* Image: src intentionally left blank. Replace with your map file path when ready. */}
        <img
          src="png-map-diagram-world-transpasfsdrent-background.png"
          alt="world map"
          className="w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* Footer / Country list */}
      <footer className="w-full max-w-6xl text-center mb-6">
        <p className="text-xs md:text-sm tracking-widest opacity-90">
          INDIA  |  UAE  |  SAUDI ARABIA  |  QATAR  |  OMAN  |  KUWAIT  |  UNITED KINGDOM  |  MALAYSIA  |  BAHRAIN  |  AUSTRALIA
        </p>
      </footer>

    </section>
  );
};

export default MapSlide;
