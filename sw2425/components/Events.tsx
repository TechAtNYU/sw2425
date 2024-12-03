"use client";

import React from "react";

const Events = () => {
  return (
    <section className="relative z-10 w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 px-4 text-center md:text-left">
        <h2 className="text-2xl md:text-5xl font-extrabold text-white inline-block py-2 px-4 rounded-md">
          Events
        </h2>
      </div>

      <div className="w-full md:w-1/2 md:absolute md:top-[-20px] md:right-0 p-4 md:p-8 text-center md:text-left text-white">
        <p className="text-lg md:text-3xl">
          Tech@NYU's Startup Week is one of NYU's largest tech-fest events,
          becoming the founding event for the club. In the past, we have
          partnered with.
        </p>
      </div>
    </section>
  );
};

export default Events;
