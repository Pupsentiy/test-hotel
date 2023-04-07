import { ChangeHandler, RefCallBack } from "react-hook-form";

export interface IInputProps {
  htmlFor: string;
  error?: string | undefined;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
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
