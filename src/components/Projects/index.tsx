"use client";
import React, { useState } from "react";
import style from "./Projects.module.scss";
import Image, { StaticImageData } from "next/image";
import projectImage1_1 from "@/assets/project1-1.png";
import projectImage1_2 from "@/assets/project1-2.png";
import projectImage1_3 from "@/assets/project1-3.png";
import projectImage2_1 from "@/assets/project2-1.png";
import projectImage2_2 from "@/assets/project2-2.png";
import projectImage2_3 from "@/assets/project2-3.png";
import projectImage3_1 from "@/assets/project3-1.png";
import projectImage3_2 from "@/assets/project3-2.png";
import ProjectCard from "../ProjectCard";

interface Project {
  name: string;
  year: string;
  desc: string;
  tech: string[];
  image: StaticImageData[];
}

const listProjects: Project[] = [
  {
    name: "Seven E Commerce",
    year: "2024",
    desc: "Colaborated with group 7 in harisenin.com bootcamp to develop an e-commerce app which inspired by another e-commerce named protest.eu.",
    tech: ["React", "TailwindCSS", "ExpressJS", "Sequelize", "Postgres"],
    image: [projectImage1_1, projectImage1_2, projectImage1_3],
  },
  {
    name: "Tinker",
    year: "2023",
    desc: "Tinker is a web application that allows users to create, edit, and delete their own posts.",
    tech: ["NextJS", "TailwindCSS", "Prisma", "Postgres"],
    image: [projectImage2_1, projectImage2_2, projectImage2_3],
  },
  {
    name: "Recipe App",
    year: "2023",
    desc: "Recipe app is a platform that users can search for recipes around the world. This project uses external API.",
    tech: ["React", "TailwindCSS", "Redux", "React-Router"],
    image: [projectImage3_1, projectImage3_2],
  },
];

const Projects = () => {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  return (
    <div className={style.projects}>
      <div className={style.container}>
        <h1>Projects</h1>
        <div>
          {listProjects.map((project, index) => (
            <ProjectCard
              key={index}
              data={project}
              isOpen={openProjectIndex === index}
              onClick={() => handleProjectClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
