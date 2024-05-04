import React from "react";
import auto from "../images/auto2.png";
import { Link } from "react-router-dom";

const Auto = () => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mt-9">OUR SERVICES</h1>
      <div className="flex">
        <div className="bg-green-200 shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <img src={auto} className="w-full rounded-lg" alt="" />
          <div className="px-4 my-6 text-center">
            <h3 className="text-lg font-semibold">Auto</h3>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas
            </p>
            <Link to="/booking">
              {" "}
              <button
                type="button"
                className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-orange-200 shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <img src={auto} className="w-full rounded-lg" alt="" />
          <div className="px-4 my-6 text-center">
            <h3 className="text-lg font-semibold">Auto</h3>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas
            </p>
            <Link to="/auto">
              <button
                type="button"
                className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-green-600 hover:bg-blue-700 active:bg-blue-600"
              >
                Instant Auto
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-purple-300 shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <img src={auto} className="w-full rounded-lg" alt="" />
          <div className="px-4 my-6 text-center">
            <h3 className="text-lg font-semibold">Auto</h3>
            <p className="mt-2 text-sm text-gray-400">
              If you join as a auto driver you can register/join this website.
              and after join/register you are member now.........
            </p>
            <Link to="/addnewauto">
              <button
                type="button"
                className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-black hover:bg-blue-700 active:bg-blue-600"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auto;
