import { FC } from "react";
import { ChangeHandler, RefCallBack } from "react-hook-form";

import "./Input.scss";

export interface IInputProps {
  htmlFor: string;
  error?: string | undefined;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  register?: {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    disabled?: boolean | undefined;
  };
  placeholder?: string;
  classInput: string;
  classLabel: string;
}

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
