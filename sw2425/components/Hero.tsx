"use client";
import React from "react";
import BgTextComp from "./bgtext";
import SlidingBg from "./SlidingBg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="absolute inset-0 bg-[#0F0F0F] z-0"></div>
      <SlidingBg />
      <BgTextComp text1="Startup" text2="Week" />
      <header className="sm:max-w-[60vw] max-w-[100vw] justify-center inset-0 z-[5000] pb-20">
        <div className="z-[5000]">
          <h1 className="lg:text-8xl text-center text-5xl sm:text-6xl text-white font-bold font-ppnue z-[5000]">
            StartupWeek
          </h1>
          <div className="flex max-w-[60vw] text-gray-200 py-2 z-[5000]">
            <p className="flex-grow basis-[65%] text-lg">
              NYU’s Premier Student Entrepreneurship Event!
            </p>
            <p className="flex-grow basis-[35%] text-lg px-5 ">
              March 3 - 10, 2025
            </p>
          </div>

          <div className="mt-8 text-center flex justify-center items-center space-x-10">
            <button className="font-bold bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
              Sign Up
            </button>
            <p className="text-gray-200 underline cursor-pointer">Learn More</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
