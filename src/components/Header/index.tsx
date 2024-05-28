"use client";
import React, { forwardRef } from "react";
import style from "@/components/Header/Header.module.scss";
import { ForwardRefComponent } from "framer-motion";

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

const Header = forwardRef(function index(props, ref: any) {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>Anjas.</h1>
      </div>
      <div className={style.menu}>
        <div ref={ref} className={style.boundary}></div>
      </div>
    </header>
  );
});

export default Header;
