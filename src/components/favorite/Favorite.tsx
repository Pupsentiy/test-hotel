import { FC } from "react";

import { useAppSelector } from "../../hooks/hooks";

import Catalog from "../catalog/Catalog";

import "./Favorite.scss";

const Favorite: FC = () => {
  const favorite = useAppSelector(
    (state) => state.favoriteHotelReducer.favorite
  );

  return (
    <div className="favorite-container">
      <h1 className="favorite-title">Избранное</h1>
      <div className="favorite-header">
        <select name="" id="" className="favorite-select">
          <option value="">Рейтенг</option>
          <option value=""></option>
        </select>
        <select name="" id="" className="favorite-select">
          <option value="">цена</option>
          <option value=""></option>
        </select>
      </div>
      <Catalog data={favorite} />
    </div>
  );
};

export default Favorite;
