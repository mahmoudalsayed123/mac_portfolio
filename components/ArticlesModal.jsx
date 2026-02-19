"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
import Image from "next/image";
import Link from "next/link";
const ArticlesModal = ({ open }) => {
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
        className="absolute top-[100px] left-[250px] w-[900px] h-fit rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} />
        <h2 className="mt-[80px] px-[50px] text-[24px] text-red-600 mb-5 font-bold font-sans">
          My Developer Blog
        </h2>
        <div className="px-[50px] py-4 text-white mb-5">
          <div className="flex items-center gap-5">
            <div>
              <Image
                src="/assets/icons/blog1.png"
                alt="blog image"
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="text-[14px] text-gray-400 mb-3">Sep 2, 2025</p>
              <p className="text-[16px] text-gray-400 mb-3">
                TypeScript Explained: What It Is, Why It Matters, and How to
                Master It
              </p>
              <Link
                className="text-sky-500 underline cursor-pointer"
                href="https://medium.com/@saad.dev/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it-63275b750110"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="px-[50px] py-4 text-white mb-5">
          <div className="flex items-center gap-5">
            <div>
              <Image
                src="/assets/icons/blog2.png"
                alt="blog image"
                width={100}
                height={100}
              />
            </div>
            <div>
              <p className="text-[14px] text-gray-400 mb-3">Aug 28, 2025</p>
              <p className="text-[16px] text-gray-400 mb-3">
                The Ultimate Guide to Mastering Three.js for 3D Development
              </p>
              <Link
                className="text-sky-500 underline cursor-pointer"
                href="https://medium.com/@saad.dev/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it-63275b750110"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArticlesModal;
