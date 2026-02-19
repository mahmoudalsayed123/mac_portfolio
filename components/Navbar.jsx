"use client";
import { navLinks } from "@/app/constants";
import React, { useState } from "react";
import FinderModal from "./FinderModal";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [openFinderModal, setOpenFinderModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openResumeModal, setOpenResumeModal] = useState(false);
  function formatDate(date = new Date()) {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }
  return (
    <nav className="flex justify-between items-center absolute top-0 left-0 w-full h-[50px] px-4 py-2   bg-white/20 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <img
          src="/assets/apple-icon.png"
          className="w-[50px] h-[50px]"
          alt="apple-icon"
        />
        <p className="font-bold text-[16px] text-white font-sans">
          Mahmoud`s Portfolio
        </p>
        <div className="flex items-center gap-4 ms-6">
          {navLinks.map((link) => (
            <p
              className="text-[14px] cursor-pointer transiton-all duration-300 text-white hover:underline"
              key={link.id}
              onClick={() => {
                if (link.name === "Projects") {
                  setOpenFinderModal(true);
                } else if (link.name === "Contact") {
                  setOpenContactModal(true);
                } else if (link.name === "Resume") {
                  setOpenResumeModal(true);
                }
              }}
            >
              {link.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center me-[30px] gap-4">
        <div className="flex items-center gap-6 me-3">
          <img
            className="w-[25px] h-[25px] p-1 cursor-pointer rounded-md transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-md"
            src="/assets/icons/wifi.svg"
            alt="wifi"
          />
          <img
            className="w-[25px] h-[25px] p-1 cursor-pointer rounded-md transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-md"
            src="/assets/icons/search.svg"
            alt="search"
          />
          <img
            className="w-[25px] h-[25px] p-1 cursor-pointer rounded-md transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-md"
            src="/assets/icons/porfile.svg"
            alt="profile"
          />
        </div>
        <p className="text-white font-sans">{formatDate(new Date())}</p>
      </div>
      {openFinderModal && <FinderModal open={setOpenFinderModal} />}
      {openContactModal && <ContactModal open={setOpenContactModal} />}
      {openResumeModal && <FinderModal open={setOpenResumeModal} />}
    </nav>
  );
};

export default Navbar;
