import { ChangeEvent, useState } from "react";
import styles from "./text-field.module.scss";
import { SizeType } from "@/types/SizeType";

const TextField = ({
  variant = "standard",
  onChange,
  defaultValue,
  size = "md",
  label,
}: {
  variant?: "outlined" | "filled" | "standard";
  onChange?: (value: string) => void;
  defaultValue?: string;
  size?: SizeType;
  label?: string;
}) => {
  const [value, setValue] = useState<string>(defaultValue || "");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
      setValue(value);
    }
  };
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        className={`${styles.root} ${styles[variant]} ${styles[size]} `}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default TextField;
