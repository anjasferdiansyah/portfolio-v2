"use client";
import React, { useRef, useState } from "react";
import style from "./ProjectCard.module.scss";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

interface Project {
  name: string;
  year: string;
  desc: string;
  tech: string[];
  image: StaticImageData[];
}

interface ProjectCardProps {
  data: Project;
  isOpen: boolean;
  onClick: () => void;
}

const ProjectCard = ({ data, isOpen, onClick }: ProjectCardProps) => {
  const [scope, animate] = useAnimate();

  const outer = useRef(null);
  const inner = useRef(null);

  const animateIn = async (e: any) => {
    const bounds = e.target.getBoundingClientRect();

    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    await animate(
      outer.current,
      { top: `${direction * 100}%` },
      { duration: 0 }
    );

    await animate(
      inner.current,
      { top: `${-1 * direction * 100}%` },
      { duration: 0 }
    );

    animate([outer.current, inner.current], { top: "0%" }, { duration: 0.29 });
  };

  const animateOut = (e: any) => {
    const bounds = e.target.getBoundingClientRect();

    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    animate(outer.current, { top: `${direction * 100}%` }, { duration: 0.3 });

    animate(
      inner.current,
      { top: `${-1 * direction * 100}%` },
      { duration: 0.3 }
    );
  };

  return (
    <div className={style.wrapper}>
      <motion.div
        className={style.projectHeader}
        ref={scope}
        onClick={onClick}
        onMouseEnter={animateIn}
        onMouseLeave={animateOut}
      >
        <h2>{data.name}</h2>
        <p>{data.year}</p>
        <div className={style.outer} ref={outer}>
          <div className={style.inner} ref={inner}></div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto", transition: { duration: 0.3 } }}
            exit={{ height: 0, transition: { duration: 0.3 } }}
            className={`${style.projectBody}`}
          >
            <p>{data.desc}</p>
            <ul className={style.technologies}>
              {data.tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <button>See Website</button>
            <div className={style.projectWrapper}>
              {data.image.map((image, index) => (
                <Image
                  src={image}
                  className={style.projectImage}
                  alt="projectImage"
                  key={index}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
