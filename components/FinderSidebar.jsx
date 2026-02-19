"use client";

import { sidebarData } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";
import WorkWindow from "./WorkWindow";
import AboutWindow from "./AboutWindow";
import ResumeWindow from "./ResumeWindow";
import TrashWindow from "./TrashWindow";

const FinderSidebar = () => {
  const [isWorkOpen, setIsWorkOpen] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  return (
    <div className="flex">
      <div className=" w-[200px] min-h-[350px] px-6 py-4 bg-[#323232] text-white mt-[55px]">
        <div>
          <p className="text-[14px] font-semibold text-slate-500 mb-2">
            Favorites
          </p>
          <ul>
            {sidebarData.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 px-3 py-2 mb-4 text-[14px] rounded-md hover:bg-[#ffffff1a] cursor-pointer ${isWorkOpen && item.name === "Work" ? "bg-[#ffffff1a]" : ""} ${isAboutOpen && item.name === "About Me" ? "bg-[#ffffff1a]" : ""} ${isResumeOpen && item.name === "Resume" ? "bg-[#ffffff1a]" : ""} ${isTrashOpen && item.name === "Trash" ? "bg-[#ffffff1a]" : ""}`}
                onClick={() => {
                  if (item.name === "Work") {
                    setIsWorkOpen(true);
                    setIsAboutOpen(false);
                    setIsResumeOpen(false);
                    setIsTrashOpen(false);
                  }
                  if (item.name === "About Me") {
                    setIsAboutOpen(true);
                    setIsWorkOpen(false);
                    setIsResumeOpen(false);
                    setIsTrashOpen(false);
                  }
                  if (item.name === "Resume") {
                    setIsResumeOpen(true);
                    setIsWorkOpen(false);
                    setIsAboutOpen(false);
                    setIsTrashOpen(false);
                  }
                  if (item.name === "Trash") {
                    setIsTrashOpen(true);
                    setIsWorkOpen(false);
                    setIsAboutOpen(false);
                    setIsResumeOpen(false);
                  }
                }}
              >
                <Image
                  src={item.icons}
                  alt={item.name}
                  width={18}
                  height={18}
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isWorkOpen && <WorkWindow setIsWorkOpen={setIsWorkOpen} />}
      {isAboutOpen && <AboutWindow setIsAboutOpen={setIsAboutOpen} />}
      {isResumeOpen && <ResumeWindow setIsResumeOpen={setIsResumeOpen} />}
      {isTrashOpen && <TrashWindow setIsTrashOpen={setIsTrashOpen} />}
    </div>
  );
};

export default FinderSidebar;
