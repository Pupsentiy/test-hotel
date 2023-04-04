import { useEffect } from "react";
import Chosen from "../../components/chosen/Chosen";
import Hotels from "../../components/hotels/Hotels";
import Search from "../../components/search/Search";

import "./Home.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchHotels } from "../../store/reducers/hotelReducer";

const Home = () => {
  const dispath = useAppDispatch();
  const now = new Date()
  .toLocaleString("ru")
  .slice(0, 10).replace(/[\.\/]/g,'-');
  console.log(now)
  useEffect(() => {
    dispath(fetchHotels(now));
  }, []);

  return (
    <div className="home-container">
      <div className="home-left-block">
        <Search />
        <Chosen />
      </div>
      <div className="home-right-block">
        <Hotels />
      </div>
    </div>
  );
};

export default Home;
