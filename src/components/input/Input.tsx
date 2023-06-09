import { FC } from "react";

import { IInputProps } from "./Input.types";

import "./Input.scss";

const Input: FC<IInputProps> = ({
  htmlFor,
  error,
  type,
  onChange,
  value,
  register,
  classInput,
  classLabel,
  placeholder,
}) => {
  return (
    <div className="input-conteiner">
      <label className={classLabel} htmlFor={htmlFor}>
        {htmlFor}
      </label>
      <input
        type={type}
        className={classInput}
        id={htmlFor}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...register}
      />
      <small className="input-error">{error}</small>
    </div>
  );
};

export default Input;
