import { useEffect } from "react";
import Hotels from "../../components/hotels/Hotels";
import Search from "../../components/search/Search";

import "./Home.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchHotelsRequestAction } from "../../store/reducers/hotels/hotelReducer";
import Favorite from "../../components/favorite/Favorite";
import Header from "../../components/header/Header";

const Home = () => {
  const dispath = useAppDispatch();
  const { currentDate, location, amountOfDays } = useAppSelector(
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
          <Hotels />
        </div>
      </div>
    </>
  );
};

export default Home;
