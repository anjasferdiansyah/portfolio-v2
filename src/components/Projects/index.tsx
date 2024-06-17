import React from "react";
import style from "./Projects.module.scss";
import Image from "next/image";
import projectImage1_1 from "@/assets/project1-1.png";
import projectImage1_2 from "@/assets/project1-2.png";
import projectImage1_3 from "@/assets/project1-3.png";

const listProjects = {
  
}

const Projects = () => {
  return (
    <div className={style.projects}>
      <div className={style.container}>
        <h1>Projects</h1>
        <div className={style.wrapper}>
          <div className={style.projectHeader}>
            <h2>Seven E Commerce</h2>
            <p>2024</p>
          </div>
          <div className={style.projectBody}>
            <p>
              Colaborated with group 7 in harisenin.com bootcamp to develop an e
              commerce app which inspired by another e-commerce named
              protest.eu.
            </p>
            <ul className={style.technologies}>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>ExpressJS</li>
              <li>Sequelize</li>
              <li>Postgres</li>
            </ul>
            <button>See Website</button>
            <div className={style.projectWrapper}>
              <Image
                src={projectImage1_1}
                className={style.projectImage}
                alt="projectImage1_1"
              />
              <Image
                src={projectImage1_2}
                className={style.projectImage}
                alt="projectImage1_2"
              />
              <Image
                src={projectImage1_3}
                className={style.projectImage}
                alt="projectImage1_3"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
