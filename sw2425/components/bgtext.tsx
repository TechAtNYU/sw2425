import React from "react";

type textparts = {
  text1: string;
  text2: string;
};

const BgTextComp = ({ text1, text2 }: textparts) => {
  return (
    <div>
      <div
        className="
          z-[0] 
          absolute 
          top-[-5rem] 
          sm:top-[-8rem] 
          md:top-[-10rem] 
          lg:top-[-15rem] 
          left-[-10vw] 
          select-none 
          pointer-events-none
          text-[30px]      // Base size for mobile
          sm:text-[300px]  // Small screens
          md:text-[350px]  // Medium screens
          lg:text-[560px]  // Large screens
          text-[#1A1A1A]   // Using Tailwind color syntax
          font-['LowDefTRIAL']  // Font family
        "
      >
        {text1}
      </div>
      <div
        className="
          z-[0] 
          absolute 
          top-[5rem] 
          sm:top-[8rem] 
          md:top-[10rem] 
          lg:top-[15rem] 
          left-[10vw] 
          select-none 
          pointer-events-none
          text-[300px]      // Base size for mobile
          sm:text-[300px]  // Small screens
          md:text-[350px]  // Medium screens
          lg:text-[560px]  // Large screens
          text-[#1A1A1A]   // Using Tailwind color syntax
          font-['LowDefTRIAL']  // Font family
        "
      >
        {text2}
      </div>
    </div>
  );
};

export default BgTextComp;
