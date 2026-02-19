"use client";
import Image from "next/image";
import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

const ResumeWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[500px] h-[calc(100%-55px)] mt-[70px] text-white px-6 py-4">
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          src="/assets/icons/resume.png"
          alt="resume"
          width={70}
          height={70}
          className="mb-2"
        />
        <p className="text-[16px] font-semibold font-sans">my Resume</p>
      </div>
      {isOpen && <ResumeModal open={setIsOpen} />}
    </div>
  );
};

export default ResumeWindow;
