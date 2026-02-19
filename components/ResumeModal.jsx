"use client";
import React from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
import Image from "next/image";

const ResumeModal = ({ open }) => {
  const handleClose = () => {
    open(false);
  };
  return (
    <motion.div className="absolute top-0 left-0 w-full h-screen ">
      <motion.div
        drag
        dragElastic={0.2}
        dragMomentum={false}
        className="absolute  top-[-50px] left-[400px] w-[450px] min-h-[400px] rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} nameWindow="About Me" />
        <p className="absolute top-[13px] left-[50%] transform translate-x-[-50%] text-gray-600 text-[18px] font-semibold font-sans italic">
          Resume
        </p>
        <div className=" text-white w-[600px] h-full mt-[55px] ">
          <Image
            src={"/assets/icons/cv.jpeg"}
            alt="my image"
            width={450}
            height={350}
            className="w-[450px] h-fit object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeModal;
