import React, { ButtonHTMLAttributes, useEffect, useRef } from "react";
import styles from "./button.module.scss";
const button = ({
  children,
  variant = "text",
  ...rest
}: {
  children?: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
} & ButtonHTMLAttributes<HTMLButtonElement>) => {

  const ref = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {

    const applyContainerProperties = () => {
      ref.current?.classList.add("effect");
    };
    applyContainerProperties();
  }, []);

  return (
    <button ref={ref} className={`${styles.root} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default button;
