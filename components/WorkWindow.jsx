"use client";
import { projects } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";
import DocumentationModal from "./DocumentationModal";
import ProjectImageModal from "./ProjectImageModal";
const ProjectWindow = ({ files }) => {
  const [isDocumentationOpen, setIsDocumentationOpen] = useState(false);
  const [documentation, setDocumentation] = useState("");
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [image, setImage] = useState("");
  return (
    <>
      <div className="grid grid-cols-2 gap-3 w-[300px] h-[calc(100%-55px)] mt-[70px] text-white px-6 py-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex flex-col items-center gap-2 mb-[50px]  cursor-pointer "
            onClick={() => {
              if (file.name === "Documentation") {
                setIsDocumentationOpen(true);
                setDocumentation(file?.documentation);
              }
              if (file.name === "Project Image") {
                setIsImageOpen(true);
                setImage(file?.image);
              }
              if (file.name === "Design") {
                window.open(file?.url, "_blank");
              }
              if (file.name === "Live Demo") {
                window.open(file?.url, "_blank");
              }
            }}
          >
            <Image src={file.icons} alt={file.name} width={50} height={50} />
            <h3 className="text-[14px] mt-2 font-semibold font-sans italic">
              {file.name}
            </h3>
          </div>
        ))}
        {isDocumentationOpen && (
          <DocumentationModal
            open={setIsDocumentationOpen}
            documentation={documentation}
          />
        )}
        {isImageOpen && (
          <ProjectImageModal open={setIsImageOpen} image={image} />
        )}
      </div>
    </>
  );
};

const WorkWindow = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [files, setFiles] = useState([]);
  return (
    <>
      {isProjectOpen ? (
        <ProjectWindow files={files} />
      ) : (
        <div className="grid grid-cols-3 gap-3 w-full h-[calc(100%-55px)] mt-[55px] text-white px-6 py-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center gap-2 mb-3 cursor-pointer "
              onClick={() => {
                setIsProjectOpen(true);
                setFiles(project.files);
              }}
            >
              <Image
                src={project.icons}
                alt={project.name}
                width={70}
                height={70}
              />
              <h3>{project.name}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WorkWindow;
