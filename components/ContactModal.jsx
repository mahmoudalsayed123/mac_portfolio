"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Dots from "./Dots";
import Image from "next/image";
import Link from "next/link";
const ContactModal = ({ open }) => {
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
        className="absolute top-[100px] left-[300px] w-[600px] min-h-[300px] px-5 py-3 rounded-lg bg-[#1E1E1E] "
      >
        <Dots handleClose={handleClose} />
        <div className=" mt-[70px] mb-5 text-white">
          <Image
            src="/assets/myImages/img2.jpg"
            alt="img2"
            width={100}
            height={100}
            className="rounded-full mb-3"
          />
          <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
          <p className="text-gray-400 mb-4">
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/mahmoudalsayed123"
            target="_blank"
            className={`bg-[#f4656b] w-[150px] h-[84px] p-3 flex flex-col items-start gap-2 rounded-md`}
          >
            <Image
              src="/assets/icons/github.svg"
              alt="githup"
              width={20}
              height={20}
              className="rounded-full "
            />
            <p className="text-white">Githup</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahmoud-sayed-20021b295/"
            target="_blank"
            className={`bg-[#05b6f6] w-[150px] h-[84px] p-3 flex flex-col items-start gap-2 rounded-md`}
          >
            <Image
              src="/assets/icons/linkedin.svg"
              alt="linkedin"
              width={20}
              height={20}
              className="rounded-full "
            />
            <p className="text-white">Linkedin</p>
          </Link>
          <Link
            href="https://wa.me/+201144257803"
            target="_blank"
            className={`bg-[#4FCE5D] w-[150px] h-[84px] p-3 flex flex-col items-start gap-2 rounded-md`}
          >
            <Image
              src="/assets/icons/whats.svg"
              alt="whats app"
              width={20}
              height={20}
              className="rounded-full"
            />
            <p className="text-white">Whats App</p>
          </Link>
          <Link
            href="https://www.facebook.com/mahmoud.alsayed.190?locale=ar_AR"
            target="_blank"
            className={`bg-[#1778F2] w-[150px] h-[84px] p-3 flex flex-col items-start gap-2 rounded-md`}
          >
            <Image
              src="/assets/icons/facebook.svg"
              alt="facebook"
              width={20}
              height={20}
              className="rounded-full"
            />
            <p className="text-white">Facebook</p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
