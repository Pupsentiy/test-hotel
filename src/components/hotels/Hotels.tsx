import { FC } from "react";

import arrow from "../../assets/img/arrowLeft.svg";

import "./Hotels.scss";

const Hotels: FC = () => {
  const now = new Date()
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, 13);
  return (
    <div className="hotels-heading">
      <div className="hotels-title-wrapper">
        <h1 className="hotels-heading-title">Отели </h1>
        <img className="hotels-title__img" src={arrow} alt="arrow left" />
        <h1 className="hotels-heading-title">Москва</h1>
      </div>
      <h2 className="hotels-heading-date">{now}</h2>
    </div>
  );
};

export default Hotels;
