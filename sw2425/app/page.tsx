// "use client";
// import Hero from "@/components/Hero";
// import Events from "@/components/Events";
// import { Carousel, Card } from "@/components/applestyleCarousel";
// import Speaker from "@/components/Speaker";
// import SignUpForm from "@/components/SignUpForm";

// import SlidingBg from "@/components/SlidingBg";
// import React from "react";
// export default function Home() {
//   return (
//     /// Center a header file inside a div
//     <main className="relative flex justify-center items-center flex-col overflow-hidden w-full">
//       <SlidingBg />
//       <Hero />
//       <Events />
//       <Carousel />
//       <Speaker />
//       <SignUpForm />
//       <div className="h-[100vh]">This is to test the overflow</div>
//     </main>
//   );
// }

import Hero from "@/components/Hero";
import Events from "@/components/Events";
<<<<<<< HEAD
import Speaker from "@/components/Speaker";
import SignUpForm from "@/components/SignUpForm";

=======
import { Carousel, Card } from "@/components/applestyleCarousel"; // Correct path to Carousel and Card
import Speaker from "@/components/Speaker";
import SignUpForm from "@/components/SignUpForm";
import SlidingBg from "@/components/SlidingBg";
>>>>>>> 75bd68deab162cc761862de35a95cb3e23988933
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
