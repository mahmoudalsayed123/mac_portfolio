"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
const SkillsModal = ({ open }) => {
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
        className="absolute top-[150px] left-[300px] w-[500px] h-[430px] px-5 py-3 rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} />
        <p className=" absolute top-[13px] left-[50%] transform translate-x-[-50%] text-gray-600 text-[18px] font-semibold font-sans italic">
          Tech Stack
        </p>
        <div className="mt-[70px] text-white">
          <h4 className="text-[16px] text-white font-bold mb-6 font-sans">
            @Mahmoud Show tech stack
          </h4>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-7 ms-[47px]">
              <p className="text-[14px] text-white font-bold font-sans">
                Category
              </p>
              <p className="text-[14px] text-white font-bold font-sans">
                Technologies
              </p>
            </div>
            <hr className="w-full border border-dotted border-gray-600" />
            <div className="flex items-center gap-7">
              <p>✅</p>
              <p className="text-[16px] font-sans text-green-700">Frontend</p>
              <p className="text-[16px] tracking-wide font-sans text-gray-400">
                React.js, Next.js, Typescript
              </p>
            </div>
            <div className="flex items-center gap-7">
              <p>✅</p>
              <p className="text-[16px] font-sans text-green-700">Backend</p>
              <p className="text-[16px] tracking-wide font-sans text-gray-400">
                Node.js, Express, MongoDB, Mongoose
              </p>
            </div>
            <div className="flex items-center gap-7">
              <p>✅</p>
              <p className="text-[16px] font-sans text-green-700">Styling</p>
              <p className="text-[16px] tracking-wide font-sans text-gray-400">
                Tailwind CSS, Framer motion, Css
              </p>
            </div>
            <div className="flex items-center gap-7">
              <p>✅</p>
              <p className="text-[16px] font-sans text-green-700">Mobile</p>
              <p className="text-[16px] tracking-wide font-sans text-gray-400">
                React Native, Expo
              </p>
            </div>
            <div className="flex items-center gap-7">
              <p>✅</p>
              <p className="text-[16px] font-sans text-green-700">Tools</p>
              <p className="text-[16px] tracking-wide font-sans text-gray-400">
                Git, GitHub, Docker, Kubernetes, Jenkins, Jira, Postman
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsModal;
