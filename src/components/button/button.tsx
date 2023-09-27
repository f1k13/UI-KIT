import React, { ButtonHTMLAttributes, useRef } from "react";
import styles from "./button.module.scss";
const button = ({
  children,
  variant = "text",
  ...rest
}: {
  children?: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const ref = useRef();
  return (
    <button ref={ref} className={`${styles.root} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default button;
