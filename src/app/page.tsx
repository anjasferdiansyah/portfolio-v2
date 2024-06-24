"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import { useEffect, useRef, useState } from "react";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const stickyElement = useRef(null);
  const textWrapper = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <Cursor stickyElement={stickyElement} textWrapper={textWrapper} />
      )}
      <Toaster />
      <Header ref={stickyElement} />
      <main>
        <Hero ref={textWrapper} />
        <About />
        <Experiences />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
