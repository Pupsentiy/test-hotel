import { FC, ReactNode } from "react";

import './ModalWindow.scss'

export type TModalWindowProps = {
  children:ReactNode
}

const ModalWindow:FC<TModalWindowProps> = ({children}) => {
  return (
    <div className="modalwindow-container">
      {children}
    </div>
  );
};

export default ModalWindow;