import { compose } from "redux";
import { FC } from "react";

import img1 from "../../assets/img/imgH1.png";
import img2 from "../../assets/img/imgH2.png";
import img3 from "../../assets/img/imgH3.png";
import img4 from "../../assets/img/imgH4.png";

import StarSvg, { TStarSvgProps } from "../../components/svg/star/StarSvg";

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const EMAIL_REGEXP =
  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
export const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$/;

export const stars: FC<TStarSvgProps>[] = [
  StarSvg,
  StarSvg,
  StarSvg,
  StarSvg,
  StarSvg,
];

export const arrImg = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

export const dataRating = [
  { id: 1, name: "Рейтинг", value: "DESC" },
  { id: 1, name: "Рейтинг -", value: "ASC" },
];
export const dataPrice = [
  { id: 1, name: "Цена", value: "DESC" },
  { id: 1, name: "Цена -", value: "ASC" },
];
