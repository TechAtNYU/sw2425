"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SlidingBg = ({ children }: { children?: React.ReactNode }) => {
  const [height, setHeight] = useState(0);
  const refLeft = useRef<HTMLDivElement>(null);
  const refRight = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update the height from the boundaries of the ref
    const updateHeight = () => {
      if (refLeft.current) {
        const rect = refLeft.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // Initial height calculation
    updateHeight();

    // Create a ResizeObserver to monitor the ref's size
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (refLeft.current) {
      resizeObserver.observe(refLeft.current);
    }

    // Cleanup on unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [refLeft]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0", "end 100%"],
  });

  // Map the scroll progress to transform values
  const widthTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth]
  ); // Moves -100vw
  const rotateTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [180 + 360, 180]
  );
  const leftWidthTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [-window.innerWidth, 0]
  ); // Moves 100vw
  const LeftrotateTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [180, 180 + 360]
  );
  const uniformSVGClassLeft =
    "w-[75%] h-[75%] py-3";
  const uniformSVGClassRight =
    "w-[75%] h-[75%] py-3";

  return (
    <div ref={containerRef} className="">
      <motion.div
        style={{ rotate: LeftrotateTransform, x: leftWidthTransform }}
        ref={refLeft}
        className="grid-flow-row absolute z-[500] left-[50dvw] top-[10dvh] overflow-hidden select-none pointer-events-none"
      >
        {/* <img src="/eventTypes/FlowerPetal.svg" className={`${uniformSVGClassLeft}`} alt="bg" />
                <img src="/eventTypes/GreenCross.svg" className={`${uniformSVGClassLeft}`} alt="bg" />
                <img src="/eventTypes/FlowerPetal.svg" className={`${uniformSVGClassLeft}`} alt="bg" />
                <img src="/eventTypes/WhirlwindLogos.svg" className={`${uniformSVGClassLeft}`} alt="bg" />
                
                <img src="/eventTypes/FlowerPetal.svg" className={`${uniformSVGClassLeft} col-start-2 col-start-2 row-span-4`} alt="bg" /> */}
        <img
          src="left side.svg"
          className={`${uniformSVGClassLeft}`}
          alt="bg"
        />
      </motion.div>

      {children}

      <motion.div
        style={{ rotate: rotateTransform, x: widthTransform }}
        ref={refRight}
        className="flex-col absolute z-[500] right-[-58dvw] top-[10dvh] overflow-hidden select-none pointer-events-none"
      >
        <img
          src="right side.svg"
          className={`${uniformSVGClassRight}`}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default SlidingBg;
