"use client";
import React from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
import Image from "next/image";

const MyImageModal = ({ open, image }) => {
  const handleClose = () => {
    open(false);
  };
  return (
    <motion.div className="absolute top-0 left-0 w-full h-screen ">
      <motion.div
        drag
        dragElastic={0.2}
        dragMomentum={false}
        className="absolute  top-0 left-[400px] w-[450px] h-[200px] rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} nameWindow="Documentation" />
        <div className=" text-white w-[600px] h-full mt-[55px] ">
          <Image
            src={image}
            alt="my image"
            width={450}
            height={350}
            className="w-[450px] h-[400px] object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MyImageModal;
