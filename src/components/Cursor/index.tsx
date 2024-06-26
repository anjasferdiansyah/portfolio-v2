"use client";
import { useEffect, useState } from "react";
import styles from "./Cursor.module.scss";
import {
  ForwardRefComponent,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Cursor({ stickyElement, textWrapper }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);

  let cursorSize;

  if (isTextHovered) {
    cursorSize = 100;
  } else if (isHovered) {
    cursorSize = 60;
  } else {
    cursorSize = 10;
  }

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 15, stiffness: 200, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      stickyElement.current.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered && stickyElement.current) {
      mouse.x.set(center.x - cursorSize / 2);
      mouse.y.set(center.y - cursorSize / 2);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    const sticky = stickyElement.current;
    sticky?.addEventListener("mouseover", () => setIsHovered(true));
    sticky?.addEventListener("mouseleave", () => setIsHovered(false));
    textWrapper.current.addEventListener("mouseover", () =>
      setIsTextHovered(true)
    );
    textWrapper.current.addEventListener("mouseleave", () =>
      setIsTextHovered(false)
    );
  });

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={styles.cursor}
      ></motion.div>
    </div>
  );
}
