"use client";
import React, { forwardRef, useState } from "react";
import style from "@/components/Header/Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "@/utils/animate";

const links = [
  {
    name: "Home",
    url: "/",
  },

  {
    name: "About",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

const Header = forwardRef(function Index(props, ref: any) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <h1>Anjas.</h1>
        </div>
        <div
          ref={ref}
          className={`${style.menu} ${isActive ? style.menuActive : ""}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className={style.boundary}></div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={`${style.nav}`}
          >
            <ul className={style.navLinks}>
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default Header;
