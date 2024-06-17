import React from "react";
import style from "./Experiences.module.scss";
import Image from "next/image";
import harisenin from "../../assets/harisenin.png";

const Experiences = () => {
  return (
    <div className={style.experiences}>
      <div className={style.container}>
        <h1>My Experiences</h1>
        <div className={style.wrapper}>
          <Image src={harisenin} alt="harisenin" />
          <div className={style.experiencesHeader}>
            <div className={style.title}>
              <h3>Harisenin.com</h3>
              <span></span>
              <h3>Fullstack Developer Student</h3>
            </div>
            <h3 className={style.date}>DECEMBER 2023 - PRESENT, REMOTE</h3>
          </div>
          <div className={style.experiencesDescription}>
            <p>
              I am currently participating in an intensive bootcamp at
              Harisenin.com, focusing on full-stack web development. I have
              gained proficiency in HTML, CSS, JavaScript, React, Node.js,
              Express. Throughout the program, I have completed various projects
              that demonstrate my ability to build and deploy web applications,
              and I have collaborated with peers on team projects, enhancing my
              teamwork and communication skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
