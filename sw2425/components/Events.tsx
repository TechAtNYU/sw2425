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
    <section className="relative z-10 w-full h-[50%] flex flex-col">
      <div className=" px-4 text-center md:text-left flex-row justify-center  items-center flex pt-10 ">
        <h2 className="text-2xl md:text-5xl font-extrabold text-white inline-block ">
          Events
        </h2>
        <p className="text-lg md:text-3xl text-white px-20" >
          Tech@NYU's Startup Week is one of NYU's largest tech-fest events,
          becoming the founding event for the club. In the past, we have
          partnered with.
        </p>
      </div>
      <div className="w-full py-20">
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default Events;
