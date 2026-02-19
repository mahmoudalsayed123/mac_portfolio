"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
import { aboutMeImage } from "@/app/constants";
import Image from "next/image";
import MyImageModal from "./MyImageModal";
const GalleryModal = ({ open }) => {
  const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState("");
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
        className="absolute top-[150px] left-[250px] px-5 py-3 w-[600px] h-[300px] rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} />
        <div className="flex items-center gap-5 mt-[70px]">
          {aboutMeImage.map((image) =>
            image.name === "about me " ? (
              ""
            ) : (
              <Image
                onClick={() => {
                  setOpenImage(true);
                  setImage(image.src);
                }}
                key={image.name}
                src={image.src}
                alt={image.name}
                width={100}
                height={100}
              />
            ),
          )}
          {openImage && <MyImageModal open={setOpenImage} image={image} />}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalleryModal;
