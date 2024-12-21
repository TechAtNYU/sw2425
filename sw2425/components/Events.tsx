"use client";

import React from "react";
import { Carousel, Card } from "./applestyleCarousel";

const Events = () => {
  // Define the items for the carousel as Card components
  const items = [
    <Card
      key={1}
      index={0}
      card={{
        src: "/eventTypes/DoubleSemi.svg",
        title: "Card 1",
        category: "Description 1",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={2}
      index={1}
      card={{
        src: "/eventTypes/FlowerPetal.svg",
        title: "Card 2",
        category: "Description 2",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={3}
      index={2}
      card={{
        src: "/eventTypes/GreenCross.svg",
        title: "Card 3",
        category: "Description 3",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={4}
      index={3}
      card={{
        src: "/eventTypes/WhirlwindLogos.svg",
        title: "Card 3",
        category: "Description 4",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={5}
      index={4}
      card={{
        src: "/eventTypes/WhirlwindLogos.svg",
        title: "Card 3",
        category: "Description 4",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={6}
      index={5}
      card={{
        src: "/eventTypes/WhirlwindLogos.svg",
        title: "Card 3",
        category: "Description 4",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={7}
      index={6}
      card={{
        src: "/eventTypes/WhirlwindLogos.svg",
        title: "Card 3",
        category: "Description 4",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
    <Card
      key={8}
      index={7}
      card={{
        src: "/eventTypes/WhirlwindLogos.svg",
        title: "Card 3",
        category: "Description 4",
        content: <p>This is the content for Card 1</p>,
      }}
    />,
  ];

  return (
    <section className="relative z-10 w-full h-[50%] flex flex-col">
      <div className=" px-4 text-center md:text-left flex-row justify-center w-full items-center flex pt-10 mt-5 ">
        <h2 className="text-2xl md:text-5xl font-extrabold text-white inline-block ">
          Events
        </h2>
        <p className="text-lg md:text-3xl text-white pl-20">
          Startup Week is one of NYU's largest tech-fest events It is Tech@NYU's
          flagship conference, bringing industry experts with partners from with
          eBay, YC, Berkeley Entrepreneurship Center, and other up and coming
          startups.
        </p>
      </div>
      <div className="w-full py-10 min-h-[40vh]">
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default Events;
