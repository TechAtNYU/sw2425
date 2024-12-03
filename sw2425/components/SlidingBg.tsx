"use client";
import React, { useEffect, useRef, useState } from "react";

const BackgroundSVGAnimation: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const progress = scrollY / (documentHeight - windowHeight);

      console.log("Scroll Progress:", progress);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[101] pointer-events-none overflow-hidden"
    >
      <img
        src="/left_side.svg"
        alt="Left side background"
        className="absolute top-0 left-0 w-1/4 transition-all duration-2000 ease-out"
        style={{
          transform: `translateX(${-scrollProgress * 1000}%)`,
          opacity: Math.max(0, 1 - scrollProgress * 2),
        }}
      />
      <img
        src="/right_side.svg"
        alt="Right side background"
        className="absolute top-0 right-0 w-1/4 transition-all duration-2000 ease-out"
        style={{
          transform: `translateX(${scrollProgress * 1000}%)`,
          opacity: Math.max(0, 1 - scrollProgress * 2),
        }}
      />
    </div>
  );
};

export default BackgroundSVGAnimation;
