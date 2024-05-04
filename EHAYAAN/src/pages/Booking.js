import React from "react";
import auto from "../images/auto2.png";
import { ContactUs } from "./EmailBook";
import Footer from "../components/Footer";

const Booking = () => {
  return (
    <div className="bg-gray-300">
      <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4">
            Book Auto RickShaw Now.
          </h1>
          <p className="mt-4 text-sm font-semibold">
            you can book auto rickshaw family,friends,personal or others.
          </p>
        </div>
        <div className="md:h-[450px]">
          <img src={auto} className="w-full h-full md:object-contain" alt="" />
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Booking;
