import React, { ButtonHTMLAttributes, useEffect, useRef } from "react";
import styles from "./button.module.scss";
import "./styles.scss";
const Button = ({
  children,
  variant = "text",
  disabled = false,
  color = 'default',
  ...rest
}: {
  children?: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  disabler?: boolean;
  color?: "secondary" | "success" | "error" | 'default';
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!disabled) {
      const applyContainerProperties = () => {
        ref.current?.classList.add("effect");
      };
      applyContainerProperties();
      const applyStyles = (e: MouseEvent) => {
        const { offsetY, offsetX } = e;
        const style = ref.current?.style;
        const sizeOffset = 50;
        style?.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
        style?.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
      };
      const onClick = (e: MouseEvent) => {
        ref.current?.classList.remove("active");
        applyStyles(e);

        ref.current?.classList.add("active");
      };
      ref.current?.addEventListener("mouseup", onClick);

      const cleanUpRef = ref.current;

      return () => {
        cleanUpRef?.removeEventListener("mouseup", onClick);
      };
    }
  }, []);

  return (
    <button
      ref={ref}
      className={`${styles.root} ${styles[variant]} ${styles[color]} ${
        disabled && styles.disabled
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
