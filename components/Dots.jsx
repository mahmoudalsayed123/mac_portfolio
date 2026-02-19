"use client";

import React from "react";

const Dots = ({ handleClose, nameWindow }) => {
  return (
    <div
      className={`flex items-center gap-3 absolute top-0 left-0 px-4 py-5 rounded-t-lg rounded-r-lg bg-[#323232] ${nameWindow ? "w-[450px]" : "w-full"}`}
    >
      <div
        className="w-[15px] h-[15px] rounded-full cursor-pointer bg-red-500"
        onClick={handleClose}
      ></div>
      <div className="w-[15px] h-[15px] rounded-full cursor-pointer bg-yellow-500"></div>
      <div className="w-[15px] h-[15px] rounded-full cursor-pointer bg-green-500"></div>
    </div>
  );
};

export default Dots;
