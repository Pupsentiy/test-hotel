import { FC } from "react";

import { TModalWindowProps } from "./ModalWindow.types";

import "./ModalWindow.scss";

const ModalWindow: FC<TModalWindowProps> = ({ children }) => {
  return <div className="modalwindow-container">{children}</div>;
};

export default ModalWindow;
