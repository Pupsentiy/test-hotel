import { FC } from "react";

import SwiperComponent from "../swiper/SwiperComponent";
import Catalog from "../catalog/Catalog";

import { useAppSelector } from "../../hooks/hooks";
import { changeFormatDate } from "../../core/helpers/dateFormat.helpers";

import arrow from "../../assets/img/arrowLeft.svg";
import house from "../../assets/img/house.svg";

import "./Hotels.scss";

const Hotels: FC = () => {
  const { hotels, location, currentDate } = useAppSelector(
    (state) => state.hotelReducer
  );
  const favorite = useAppSelector(
    (state) => state.favoriteHotelReducer.favorite
  );
  return (
    <div className="hotels">
      <div className="hotels-heading">
        <div className="hotels-title-wrapper">
          <h1 className="hotels-heading-title">Отели </h1>
          <img className="hotels-title__img" src={arrow} alt="arrow left" />
          <h1 className="hotels-heading-title">{location}</h1>
        </div>
        <h2 className="hotels-heading-date">{changeFormatDate(currentDate)}</h2>
      </div>
      <div className="hotels-wrapper__swiper">
        <SwiperComponent />
      </div>
      <h2 className="hotels__counter-favorite">
        Добавлено в Избранное:
        <span className="hotels__counter-favorite-count">
          {favorite.length}
        </span>
        отеля
      </h2>
      <div className="hotels-list__content">
        <Catalog houseImg={house} data={hotels} />
      </div>
    </div>
  );
};

export default Hotels;
