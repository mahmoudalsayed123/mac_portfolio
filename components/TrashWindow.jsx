"use client";
import Image from "next/image";
import React, { useState } from "react";
import TrashModal from "./TrashModal";

const TrashWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[500px] h-[calc(100%-55px)] mt-[70px] text-white px-6 py-4">
      <div className=" cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src="/assets/icons/projectImg.png"
          alt="resume"
          width={50}
          height={50}
          className="mb-2"
        />
        <p className="text-[16px] font-semibold font-sans ">img1</p>
      </div>
      {isOpen && <TrashModal open={setIsOpen} />}
    </div>
  );
};

export default TrashWindow;
