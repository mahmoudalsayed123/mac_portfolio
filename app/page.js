"use client";
import React from "react";
import { motion } from "framer-motion";
function animateText(text, defaultSize = "30px", hoverSize = "100px") {
  return text.split("").map((letter, index) => (
    <motion.span
      className="hidden md:block font-bold text-white italic font-sans tracking-wider cursor-pointer"
      key={index}
      initial={{ fontSize: defaultSize }}
      whileHover={{ fontSize: hoverSize }}
    >
      {letter}
    </motion.span>
  ));
}

const HomePage = () => {
  return (
    <main>
      <img
        src="/assets/wallpaper.jpg"
        alt="wallpaper"
        className="w-full h-screen object-cover"
      />
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {animateText("Hey I'm Mahmoud Welcom To My", "30px", "50px")}
        <br />
        {animateText("Portfolio.", "80px", "100px")}
      </div>
      <h1 className="text-[100px] font-bold font-sans">
        These Portfolio Enable Only On Desktop Screen
      </h1>
    </main>
  );
};

export default HomePage;
