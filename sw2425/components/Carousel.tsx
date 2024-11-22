import { useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the description for Card 1.",
    imageUrl: "https://via.placeholder.com/500x300?text=Card+1",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the description for Card 2.",
    imageUrl: "https://via.placeholder.com/500x300?text=Card+2",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the description for Card 3.",
    imageUrl: "https://via.placeholder.com/500x300?text=Card+3",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the description for Card 4.",
    imageUrl: "https://via.placeholder.com/500x300?text=Card+4",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the description for Card 5.",
    imageUrl: "https://via.placeholder.com/500x300?text=Card+5",
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full py-20 z-50 relative">
      <div className="flex top-30 left-10 space-x-3 mb-8">
        <button className="w-32 h-12 bg-gray-800 text-white rounded-3xl shadow-md">
          Type 1
        </button>
        <button className="w-32 h-12 bg-gray-800 text-white rounded-3xl shadow-md">
          Type 2
        </button>
        <button className="w-32 h-12 bg-gray-800 text-white rounded-3xl shadow-md">
          Type 3
        </button>
        <button className="w-32 h-12 bg-gray-800 text-white rounded-3xl shadow-md">
          Type 4
        </button>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-80 mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevCard}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
        >
          &#8249;
        </button>
        <button
          onClick={nextCard}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
