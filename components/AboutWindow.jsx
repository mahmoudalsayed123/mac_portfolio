"use client";
import { aboutMeImage } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";
import MyImageModal from "./MyImageModal";
import AboutMeModal from "./AboutMeModal";

const AboutWindow = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [image, setImage] = useState("");
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [aboutImage, setAboutImage] = useState("");
  return (
    <div className="grid grid-cols-3 gap-3 w-[500px] h-[calc(100%-55px)] mt-[70px] text-white px-6 py-4">
      {aboutMeImage.map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 mb-3 cursor-pointer "
          onClick={() => {
            if (image.name === "about me") {
              setIsAboutMeOpen(true);
              setAboutImage(image?.src);
            } else {
              setIsImageOpen(true);
              setImage(image.src);
            }
          }}
        >
          {image.name === "about me" ? (
            <Image src={image.url} alt={image.name} width={50} height={50} />
          ) : (
            <Image src={image.src} alt={image.name} width={80} height={80} />
          )}
          <p className="text-[14px] mt-2 font-semibold font-sans italic">
            {image.name}
          </p>
        </div>
      ))}
      {isImageOpen && <MyImageModal open={setIsImageOpen} image={image} />}
      {isAboutMeOpen && (
        <AboutMeModal open={setIsAboutMeOpen} aboutImage={aboutImage} />
      )}
    </div>
  );
};

export default AboutWindow;
