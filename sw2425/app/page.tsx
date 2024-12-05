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
import { Carousel, Card } from "@/components/applestyleCarousel"; // Correct path to Carousel and Card
import Speaker from "@/components/Speaker";
import SignUpForm from "@/components/SignUpForm";
import SlidingBg from "@/components/SlidingBg";
import React from "react";

export default function Home() {
  // Define the items for the carousel as Card components
  const items = [
    <Card
      key={1}
      index={0}
      card={{
        src: "/carousel1.png",
        title: "Card 1",
        category: "Description 1",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={2}
      index={1}
      card={{
        src: "/carousel2.png",
        title: "Card 2",
        category: "Description 2",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={3}
      index={2}
      card={{
        src: "/carousel3.png",
        title: "Card 3",
        category: "Description 3",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={4}
      index={3}
      card={{
        src: "/carousel4.png",
        title: "Card 3",
        category: "Description 4",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
  ];

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden w-full">
      <SlidingBg />
      <Hero />
      <Events />
      <Carousel items={items} />
      <Speaker />
      <SignUpForm />

      <div className="h-[100vh]">This is to test the overflow</div>
    </main>
  );
}
