import React, { ReactElement } from "react";
import style from "./LineMask.module.scss";
import { motion } from "framer-motion";

const LineMask = ({ children }: any) => {
  return <div className={style.lineMask}>{children}</div>;
};

export default LineMask;
