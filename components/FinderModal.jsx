"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
import FinderSidebar from "./FinderSidebar";
const FinderModal = ({ open }) => {
  const constraintsRef = useRef(null);
  const handleClose = () => {
    open(false);
  };
  return (
    <motion.div
      ref={constraintsRef}
      className="absolute top-0 left-0 w-[calc(100vw-110px)] h-screen ms-[110px] overflow-hidden"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={false}
        className="absolute top-[100px] left-[150px] w-[750px] min-h-[400px] rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} />
        <FinderSidebar />
      </motion.div>
    </motion.div>
  );
};

export default FinderModal;
