"use client";

import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Speaker from "@/components/Speaker";
import SignUpForm from "@/components/SignUpForm";
import SlidingBg from "@/components/SlidingBg";
import React from "react";

export default function Home() {
  

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden w-full">

      <Hero />
      <Events />
      <Speaker />
      <SignUpForm />
    </main>
  );
}
