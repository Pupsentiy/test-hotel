import { FC } from "react";
import { stars } from "../../core/constants/constants";
import { changeFormatDate } from "../../core/helpers/dateFormat.helpers";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import Button from "../button/Button";
import likeTransparent from "../../assets/img/likeGrey.svg";
import like from "../../assets/img/likeRed.svg";

import { THotels } from "../../store/types/store.types";
import { TCatalog } from "./Catalog.types";
import {
  setAddFavoriteAction,
  setDeleteFavoriteAction,
} from "../../store/actions";

import "./Catalog.scss";
import { TStarSvgProps } from "../svg/star/StarSvg.types";

const Catalog: FC<TCatalog> = ({ houseImg, data }) => {
  const dispatch = useAppDispatch();
  const { amountOfDays, currentDate,error } = useAppSelector(
    (state) => state.hotelReducer
  );
  const favorite = useAppSelector(
    (state) => state.favoriteHotelReducer.favorite
  );
  const getBoolean = (item: THotels) => {
    return favorite.some((hotel: THotels) => hotel.hotelId === item.hotelId);
  };

  const handleFavoriteHotel = (item: THotels) => {
    const bool = favorite.some(
      (hotel: THotels) => hotel.hotelId === item.hotelId
    );
    if (bool) {
      dispatch(setDeleteFavoriteAction(item));
    } else {
      dispatch(setAddFavoriteAction(item, amountOfDays, currentDate));
    }
  };

  console.log(error)

  return (
    <div className="catalog">
      {data &&
        data?.map((item: THotels, i: number) => (
          <div className="wrapper-catalog" key={i}>
            <div className={"catalog__item"}>
              {houseImg !== undefined ? (
                <div className="item-img">
                  <img src={houseImg} alt="house" />
                </div>
              ) : null}
              <div className="item-info">
                <div className="info-header">
                  <h3 className="item-name">{item.hotelName}</h3>
                  <Button
                    type="button"
                    classButton="btn-add-favorite"
                    onClick={() => handleFavoriteHotel(item)}
                  >
                    <img
                      src={getBoolean(item) ? like : likeTransparent}
                      alt="like Transparent"
                    />
                  </Button>
                </div>

                <div className="info-middle">
                  <h4 className="item-date">
                    {item?.currentDate !== undefined
                      ? changeFormatDate(item.currentDate)
                      : changeFormatDate(currentDate)}{" "}
                    <span>-</span>
                    {item.days !== undefined ? item.days : amountOfDays}
                    {" день"}
                  </h4>
                </div>
                <div className="info-footer">
                  <div className="item-rating">
                    {stars.map((StarSvg: FC<TStarSvgProps>, i: number) => (
                      <div key={i + 1}>
                        <StarSvg
                          color={i < item.stars ? "#CDBC1E" : "#6C6845"}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="item-price">
                    <p className="price">Price:</p>
                    <span>{item.priceFrom.toFixed(0)} ₽</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-border"></div>
          </div>
        ))}
    </div>
  );
};

export default Catalog;
