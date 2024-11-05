import React, { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  name: string;
  label: string;
  type: string;
  enteredValueHandler: (e: React.FormEvent) => void;
  inputTouchedHandler: () => void;
  enteredValue: string | number;
  inputHasError: boolean;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type,
  inputHasError,
  inputTouchedHandler,
  enteredValueHandler,
  enteredValue,
}) => {
  return (
    <label className={styles.form_field}>
      <div>{label}</div>
      <input
        className={[styles.input, inputHasError ? styles.input_error : ""].join(
          " "
        )}
        name={name}
        type={type}
        value={enteredValue}
        onChange={enteredValueHandler}
        onBlur={inputTouchedHandler}
      />
    </label>
  );
};

export default Input;
