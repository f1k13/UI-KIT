import React, { ButtonHTMLAttributes, useEffect, useRef } from "react";
import styles from "./button.module.scss";
const Button = ({
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

    const applyStyles = (e: Event) => {
      const { offsetY, offsetX } = e;
      const { style } = ref.current;
      const sizeOffset = 50;
      style.setProperty("--effect-top", `${offsetX - sizeOffset}px`);
      style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
    };

    const onClick = (e) => {
      ref.current?.classList.remove("active");
      applyStyles(e);

      ref.current?.classList.add("active");
    };

    ref.current?.addEventListener("mouseup", onClick);

    const cleanupRef = ref.current;

    return () => {
      cleanupRef?.removeEventListener("mouseup", onClick);
    };
  }, []);

  return (
    <button ref={ref} className={`${styles.root} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
