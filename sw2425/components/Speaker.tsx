import React from "react";

const Speaker: React.FC = () => {
  return (
    <div className="relative bg-blue min-h-screen flex items-center justify-center">
      <div className="text-white space-y-8 text-center px-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">
          Speakers
        </h1>
        <h2 className="text-4xl md:text-6xl font-mono font-bold">
          <span className="dot-text">[ COMING SOON ]</span>
        </h2>
        <p className="text-lg md:text-xl font-light leading-relaxed">
          Interested in speaking at an event?
        </p>
        <p className="text-lg md:text-xl font-light leading-relaxed">
          Contact us here:{" "}
          <span className="font-bold">startupweek@techatnyu.org</span>
        </p>
      </div>
    </div>
  );
};

export default Speaker;
