import { useEffect } from "react";

import Hotels from "../../components/hotels/Hotels";
import Search from "../../components/search/Search";
import Favorite from "../../components/favorite/Favorite";
import Header from "../../components/header/Header";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { fetchHotelsRequestAction } from "../../store/actions";

import "./Home.scss";

const Home = () => {
  const dispath = useAppDispatch();
  const { currentDate, location, amountOfDays, error } = useAppSelector(
    (state) => state.hotelReducer
  );
  useEffect(() => {
    dispath(fetchHotelsRequestAction(currentDate, location, amountOfDays));
  }, [amountOfDays, currentDate, dispath, location]);

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-left-block">
          <Search />
          <Favorite />
        </div>
        <div className="home-right-block">
          {error ? (
            <div className="content__error-info">
              <h2>Произошла ошибка 😕</h2>
              <p>
                К сожалению, не удалось получить отели. Попробуйте повторить
                попытку позже.
              </p>
            </div>
          ) : (
            <Hotels />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
