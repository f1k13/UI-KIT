import { ChangeEvent, useState } from "react";
import styles from "./text-field.module.scss";

const TextField = ({
  variant = "standard",
  onChange,
  defaultValue,
  size = "normal",
  label,
  onFocus,
  status = "default",
  type,
  disabled = false,
}: {
  variant?: "outlined" | "filled" | "standard";
  onChange?: (value: string) => void;
  defaultValue?: string;
  size?: "sm" | "normal";
  label?: string;
  onFocus?: () => void;
  status?: "error" | "success" | "warning" | "default";
  type?: string;
  disabled?: boolean;
}) => {
  const [value, setValue] = useState<string>(defaultValue || "");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
    setValue(e.target.value);
  };

  const handleFocus = () => {
    onFocus && onFocus();
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const labelStyles = `${styles[variant]} ${styles.label} ${
    disabled && styles.disabled
  } ${styles[status]}  ${
    isFocus
      ? styles.labelActive
      : value
      ? styles.labelActive
      : styles.labelInactive
  } ${!isFocus && styles.labelChangeColor}`;

  return (
    <div className={styles.wrap}>
      <input
        disabled={disabled}
        type={type}
        id={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${styles.root} ${styles[variant]} ${
          disabled && styles.disabled
        } ${styles[size]} ${styles[status]} `}
        onChange={handleChange}
      />
      <label className={labelStyles} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default TextField;
