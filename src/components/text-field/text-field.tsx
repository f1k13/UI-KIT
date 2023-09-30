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
    console.log(defaultValue);
  };

  return (
    <div className={styles.wrap}>
      <input
        id={label}
        required
        className={`${styles.root} ${styles[variant]} ${styles[size]} `}
        onChange={handleChange}
      ></input>
      <label className={`${styles.label}`} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default TextField;
