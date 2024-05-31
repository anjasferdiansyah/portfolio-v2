"use client";
import React, { useRef } from "react";
import style from "./Skills.module.scss";
import Image from "next/image";

interface Skill {
  name: string;
  image: string;
}

const skillsList: Skill[] = [
  { name: "HTML", image: "/html5-original.png" },
  { name: "CSS", image: "/css3-original.png" },
  { name: "Javascript", image: "/javascript-original.png" },
  { name: "Typescript", image: "/typescript-original.png" },
  { name: "React", image: "/react-original.png" },
  { name: "Next.js", image: "/nextjs-line.png" },
  { name: "Tailwind", image: "/tailwindcss-original-wordmark.png" },
  { name: "Git", image: "/git-original-wordmark.png" },
  { name: "Mysql", image: "/mysql.png" },
  { name: "Firebase", image: "/firebase-plain.png" },
  { name: "Node.js", image: "/nodejs.png" },
  { name: "Express.js", image: "/express.png" },
  { name: "Sass", image: "/sass.png" },
  { name: "PostgreSQL", image: "/postgress.png" },
  { name: "Prisma", image: "/Prisma.png" },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={style.skills}>
      <div className={style.container}>
        <h1>Skills</h1>
        <div className={style.skillsContainer} ref={containerRef}>
          <div className={style.skillsList}>
            {skillsList.map((skill, index) => (
              <div className={style.skillCard} key={index}>
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={30}
                  height={30}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
