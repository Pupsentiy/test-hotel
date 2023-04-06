import { ChangeEvent, FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import Catalog from "../catalog/Catalog";

import "./Favorite.scss";
import {
  setSortPriceAscAction,
  setSortPriceDescAction,
  setSortRatingAscAction,
  setSortRatingDescAction,
} from "../../store/reducers/favoriteHotelsReducer/favoriteHotelsReducer";
import Select from "../select/Select";
import { dataPrice, dataRating } from "../../core/constants/constants";

const Favorite: FC = () => {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector(
    (state) => state.favoriteHotelReducer.favorite
  );

  const changePickRating = (event: any) => {
    const value = event.target.value;
    if (value === "DESC") {
      dispatch(setSortRatingDescAction());
    } else {
      dispatch(setSortRatingAscAction());
    }
  };

  const changePickPrice = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value);
    if (value === "DESC") {
      dispatch(setSortPriceDescAction());
    } else {
      dispatch(setSortPriceAscAction());
    }
  };

  return (
    <div className="favorite-container">
      <h1 className="favorite-title">Избранное</h1>
      <div className="favorite-header">
        <Select
          name="rating"
          id="rating"
          onChange={(event: any) => changePickRating(event)}
          className="favorite-select"
          data={dataRating}
        />
        <Select
          name="price"
          id="price"
          onChange={(event: any) => changePickPrice(event)}
          className="favorite-select"
          data={dataPrice}
        />
      </div>
      <div className="favorite-hidden">
        <Catalog data={favorite} />
      </div>
    </div>
  );
};

export default Favorite;
