import { FC } from "react";
import { clsx } from "clsx";
import styles from "./Input.module.css";
import { IInput } from "./input.props";

const Input: FC<IInput> = ({
  name,
  value,
  type,
  status,
  label,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  className = "",
  required = false,
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      <label
        className={clsx({
          "text-xl font-medium border-gray-800": true,
          "text-green-600": status == "success",
          "text-red-600 font-bold": status == "error",
        })}
        htmlFor={name}
      >
        {label}
      </label>

      <input
        className={clsx({
          "border rounded-xl p-[5px] mt-[1vmin] text-xl border-gray-600 shadow-inner focus:outline-none focus:border-gray-800":
            true,
          [styles.input_success]: status == "success",
          [styles.input_error]: status == "error",
        })}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
