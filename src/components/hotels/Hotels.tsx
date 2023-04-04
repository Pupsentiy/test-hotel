import { FC } from "react";

import arrow from "../../assets/img/arrowLeft.svg";
import house from "../../assets/img/house.svg";
import starGrey from "../../assets/img/starGrey.svg";
import likeTransparent from "../../assets/img/likeGrey.svg";

import "./Hotels.scss";
import SwiperComponent from "../swiper/SwiperComponent";
import { useAppSelector } from "../../hooks/hooks";
import Button from "../button/Button";

const Hotels: FC = () => {
  const { data } = useAppSelector((state) => state.hotelReducer);
  const now = new Date()
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, 13);

  return (
    <div className="hotels">
      <div className="hotels-heading">
        <div className="hotels-title-wrapper">
          <h1 className="hotels-heading-title">Отели </h1>
          <img className="hotels-title__img" src={arrow} alt="arrow left" />
          <h1 className="hotels-heading-title">Москва</h1>
        </div>
        <h2 className="hotels-heading-date">{now}</h2>
      </div>
      <div className="hotels-wrapper__swiper">
        <SwiperComponent />
      </div>
      <h2 className="hotels__counter-chosen">
        Добавлено в Избранное:{" "}
        <span className="hotels__counter-chosen-count">3</span> отеля
      </h2>

      <div className="hotels-list__content">
        <div className="hotels-catalog">
          {data &&
            data.map((item: any, i: any) => (
              <div className="wrapper-catalog" key={i}>
                <div className="catalog__item">
                  <div className="item-img">
                    <img src={house} alt="house" />
                  </div>
                  <div className="item-info">
                    <h3 className="item-name">{item.hotelName}</h3>
                    <h4 className="item-date">7 июля</h4>
                    <div className="item-rating">
                      <img src={starGrey} alt="" />
                    </div>
                  </div>

                  <div className="item-price">
                    <Button type="button" classButton="btn-add-chosen">
                      <img src={likeTransparent} alt="like Transparent" />
                    </Button>
                    <p className="price">
                      Price: <span>{item.priceFrom}</span>
                    </p>
                  </div>
                </div>
                <div className="item-border"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
