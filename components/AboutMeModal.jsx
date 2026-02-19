"use client";

import React from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
import Image from "next/image";

const AboutMeModal = ({ open, aboutImage }) => {
  const handleClose = () => {
    open(false);
  };
  return (
    <motion.div className="absolute top-0 left-0 w-full h-screen ms-[90px]">
      <motion.div
        drag
        dragElastic={0.2}
        dragMomentum={false}
        className="absolute  top-[-30px] left-[400px] w-[450px] min-h-[400px] rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} nameWindow="About Me" />
        <p className="absolute top-[13px] left-[50%] transform translate-x-[-50%] text-gray-600 text-[18px] font-semibold font-sans italic">
          About Me
        </p>
        <div className="p-6 text-white w-[450px] h-[calc(100%-55px)] mt-[60px] overflow-y-auto">
          <div>
            <Image
              src={aboutImage}
              alt="my image"
              width={100}
              height={100}
              className="rounded-full mb-4"
            />
          </div>
          <p className="text-[18px] font-bold font-sans mb-4">
            Meet the Developer Behind the Code
          </p>
          <p className="text-[16px] mb-3 leading-6">
            Hey! I’m Mahmoud 👋, a web developer who enjoys building sleek,
            interactive websites that actually work well.
          </p>
          <p className="text-[16px] mb-3 leading-6">
            I specialize in JavaScript, React, and Next.js—and I love making
            things feel smooth, fast, and just a little bit delightful.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMeModal;
