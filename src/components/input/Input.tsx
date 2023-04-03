import { FC } from "react";

import "./Input.scss";

export interface IInputProps {
  htmlFor: string;
  error: string;
  type: string;
  placeholder: string;
  classInput: string;
  classLabel: string;
}

const Input: FC<IInputProps> = ({
  htmlFor,
  error,
  type,
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
      />
      <small className="input-error">{error}</small>
    </div>
  );
};

export default Input;
