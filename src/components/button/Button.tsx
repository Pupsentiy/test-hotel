import { FC, ReactNode } from "react";

export type TButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  classButton: string;
};

const Button: FC<TButtonProps> = ({ children, type, classButton }) => {
  return (
    <button className={classButton} type={type}>
      {children}
    </button>
  );
};

export default Button;
