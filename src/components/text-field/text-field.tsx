import { ChangeEvent, useState } from "react";
import styles from "./text-field.module.scss";
import { SizeType } from "@/types/SizeType";

const TextField = ({
  variant = "standard",
  onChange,
  defaultValue,
  size = "md",
  label,
  onFocus,
}: {
  variant?: "outlined" | "filled" | "standard";
  onChange?: (value: string) => void;
  defaultValue?: string;
  size?: SizeType;
  label?: string;
  onFocus?: () => void;
}) => {
  const [value, setValue] = useState<string>(defaultValue || "");
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
    setValue(e.target.value);
  };
  
  const handleFocus = () => {
    onFocus && onFocus()
    setIsFocus(true)
  }
  
  const handleBlur = () => {
    setIsFocus(false)
  }
  
  const labelStyles = `${styles.label} ${isFocus ? styles.labelActive : value ? styles.labelActive : styles.labelInactive}`

  return (
    <div className={styles.wrap}>
      <input
        id={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${styles.root} ${styles[variant]} ${styles[size]} `}
        onChange={handleChange}
      />
      <label className={labelStyles} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default TextField;
