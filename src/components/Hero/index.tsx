import React, { forwardRef } from "react";
import style from "./Hero.module.scss";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { neueMontreal } from "@/fonts/font";

const Hero = forwardRef(function index(props, ref: any) {
  return (
    <div className={style.hero}>
      <div className={style.container}>
        <p className={style.location}>
          Based in Tasikmalaya, West Java, Indonesia.
        </p>
        <div className={style.textWrapper} ref={ref}>
          <svg
            width="62"
            height="64"
            viewBox="0 0 62 64"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62 33.6848L33.9169 32.8819L54.3365 52.6023L51.4636 55.5475L32.2194 34.6226L33.0029 63.4H28.9971L29.7812 34.6226L10.5364 55.5475L7.66292 52.6023L28.0825 32.8825L0 33.6848V29.5804L28.0825 30.5176L7.66292 10.752L10.5364 7.85197L29.7812 28.7774L28.9971 0H33.0029L32.2194 28.7774L51.4631 7.85254L54.3371 10.752L33.9169 30.5176L61.9994 29.714L62 33.6848Z"
              fill="white"
            />
          </svg>

          <h1>Hey! I&apos;m Anjas. A Fullstack Developer</h1>
          <p>
            i build optimized, user-friendly websites and web applications. with
            mostly React and Next.js
          </p>
        </div>
        <div className={style.buttons}>
          <div>
            <button className={neueMontreal.className}>Contact Me</button>
            <button className={neueMontreal.className}>Resume</button>
          </div>
          <h1>(Scroll)</h1>
        </div>
      </div>
    </div>
  );
});

export default Hero;
