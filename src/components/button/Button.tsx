import { FC, ReactNode } from "react";

export type TButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  classButton: string;
  onClick?: ((e:React.MouseEvent<HTMLButtonElement>) => void) | undefined;
};

const Button: FC<TButtonProps> = ({ children, type, classButton,onClick }) => {
  return (
    <button className={classButton} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
