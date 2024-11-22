"use client";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Carousel from "@/components/Carousel";

import SlidingBg from "@/components/SlidingBg";
import React from "react";
export default function Home() {
  return (
    /// Center a header file inside a div
    <main className="relative flex justify-center items-center flex-col overflow-hidden w-full">
      {/* <SlidingBg>
        
      </SlidingBg> */}
      <Hero />
      <Events />
      <Carousel />
      <div className="h-[100vh]">This is to test the overflow</div>
    </main>
  );
}
