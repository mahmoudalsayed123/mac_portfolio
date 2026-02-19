"use client";
import React, { useState } from "react";
import { items } from "@/app/constants/index";
import { motion } from "framer-motion";
import FinderModal from "./FinderModal";
import ArticlesModal from "./ArticlesModal";
import GalleryModal from "./GalleryModal";
import SkillsModal from "./SkillsModal";
import ContactModal from "./ContactModal";

const Items = () => {
  const [isFinderModalOpen, setIsFinderModalOpen] = useState(false);
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <div className="absolute top-[50%] left-[20px] px-4 py-4 transform translate-y-[-50%] rounded-full bg-white/20 backdrop-blur-md">
        <div className="flex flex-col items-center gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => {
                {
                  if (item.name === "Finder") {
                    setIsFinderModalOpen(true);
                    setIsArticlesOpen(false);
                    setIsGalleryOpen(false);
                    setIsSkillsOpen(false);
                  } else if (item.name === "Articles") {
                    setIsArticlesOpen(true);
                    setIsFinderModalOpen(false);
                    setIsGalleryOpen(false);
                    setIsSkillsOpen(false);
                  } else if (item.name === "Gallery") {
                    setIsGalleryOpen(true);
                    setIsFinderModalOpen(false);
                    setIsArticlesOpen(false);
                    setIsSkillsOpen(false);
                  } else if (item.name === "Skills") {
                    setIsSkillsOpen(true);
                    setIsFinderModalOpen(false);
                    setIsArticlesOpen(false);
                    setIsGalleryOpen(false);
                  } else if (item.name === "Contact") {
                    setIsContactOpen(true);
                    setIsFinderModalOpen(false);
                    setIsArticlesOpen(false);
                    setIsGalleryOpen(false);
                    setIsSkillsOpen(false);
                  }
                }
              }}
              className="relative cursor-pointer group"
            >
              <motion.img
                whileHover={{ scale: 1.3, translateX: "8px" }}
                transition={{ duration: 0.2 }}
                className="w-[50px] h-[50px]"
                src={item.icon}
                alt={item.name}
              />
              <p className="text-center text-white text-sm absolute top-[10px] left-[75px] px-2 py-1   bg-white/50 backdrop-blur-md rounded-full hidden group-hover:block">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {isFinderModalOpen && <FinderModal open={setIsFinderModalOpen} />}
      {isArticlesOpen && <ArticlesModal open={setIsArticlesOpen} />}
      {isGalleryOpen && <GalleryModal open={setIsGalleryOpen} />}
      {isSkillsOpen && <SkillsModal open={setIsSkillsOpen} />}
      {isContactOpen && <ContactModal open={setIsContactOpen} />}
    </>
  );
};

export default Items;
