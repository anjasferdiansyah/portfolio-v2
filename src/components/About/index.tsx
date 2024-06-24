import React from "react";
import style from "./About.module.scss";
import Image from "next/image";
import aboutImage from "@/assets/aboutImage.png";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <div id="about" className={style.about}>
      <div className={style.container}>
        <h1 className={style.title}>About me</h1>
        <h1>A Passionate Fullstack Developer</h1>
        <p>Based in Tasikmalaya, West Java, Indonesia.</p>

        <div className={style.wrapper}>
          <div className={style.description}>
            <p>
              Hi, I&apos;m Anjas Ferdiansyah, I recently completed an intensive
              6-month bootcamp where I honed my skills and deepened my
              understanding of web development.
            </p>
            <p>
              Currently, I&apos;m focused on strengthening my web development
              foundations and staying up-to-date with the latest industry
              trends. My goal is to build seamless, user-friendly, and efficient
              web applications that provide real value to users. Let&apos;s
              create something amazing together!
            </p>
          </div>
          <Image src={aboutImage} alt="Anjas" width={300} height={300} />
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default About;
