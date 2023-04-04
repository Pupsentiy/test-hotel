import { FC } from "react";

import "./Chosen.scss";

const Chosen: FC = () => {
  return (
    <div className="chosen-container">
      <h1 className="chosen-title">Избранное</h1>
      <div className="chosen-wrapper">
        <select name="" id="" className="chosen-select">
          <option value="">Рейтенг</option>
          <option value=""></option>
        </select>
        <select name="" id="" className="chosen-select">
          <option value="">цена</option>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
};

export default Chosen;
