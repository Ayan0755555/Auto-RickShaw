import React from "react";
import hero from "../images/slider-img.png";

const AutoSection = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r mt-5 mb-4 from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Background Image"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            INDIA'S FIRST INSTANT AUTO RICKSHAW
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Experience excellence like never before with our exclusive services.
          </p>
        </div>
      </div>
    </>
  );
};

export default AutoSection;
