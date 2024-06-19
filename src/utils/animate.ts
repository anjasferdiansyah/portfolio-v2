export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.3, ease: [0.83, 0, 0.17, 1] } },
  exit: {
    x: "calc(100% + 400px)",
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
};
