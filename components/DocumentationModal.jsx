"use client";

import React from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";

const DocumentationModal = ({ open, documentation }) => {
  const handleClose = () => {
    open(false);
  };
  return (
    <motion.div className="absolute top-0 left-0 w-full h-screen ">
      <motion.div
        drag
        dragElastic={0.2}
        dragMomentum={false}
        className="absolute  top-[-60px] left-[400px] w-[450px] min-h-[400px] rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} nameWindow="Documentation" />
        <div className="p-6 text-white w-[450px] h-[calc(100%-55px)] mt-[60px] overflow-y-auto">
          {documentation?.map((item, index) => (
            <p key={index} className="mb-6 leading-6">
              {item.line}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DocumentationModal;
