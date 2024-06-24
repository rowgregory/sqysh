import React from "react";

const Loader1 = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 z-50 bg-[rgb(5,7,25)] flex flex-col items-center justify-center overflow-hidden">
      <h1
        className="text-pink-500 text-5xl md:text-8xl relative z-[55] font-Paytone-One"
        style={{ textShadow: "rgb(231 70 148) 1px 0 10px" }}
      >
        Sqysh
      </h1>
    </div>
  );
};

export default Loader1;
