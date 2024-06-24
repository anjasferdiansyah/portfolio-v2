import { delay } from "framer-motion";

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.3, ease: [0.83, 0, 0.17, 1] } },
  exit: {
    x: "calc(100% + 400px)",
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
};

export const slideMask = {
  initial: { y: "100%" },
  enter: (i: any) => ({
    y: "0",
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
  }),
};
