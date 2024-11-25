import React from "react";

type textparts = {
  text1: string;
  text2: string;
};

const BgTextComp = ({ text1, text2 }: textparts) => {
  return (
    <div>
      <div
        className="z-[0] absolute top-[-15rem] left-[-10vw] select-none pointer-events-none"
        style={{
          color: "#1A1A1A",
          fontSize: 560.88,
          fontFamily: "LowDefTRIAL",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        {text1}
      </div>
      <div
        className="z-[0] absolute top-[15rem] left-[10vw] select-none pointer-events-none"
        style={{
          color: "#1A1A1A",
          fontSize: 560.88,
          fontFamily: "LowDefTRIAL",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        {text2}
      </div>
    </div>
  );
};

export default BgTextComp;
