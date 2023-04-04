import Chosen from "../../components/chosen/Chosen";
import Hotels from "../../components/hotels/Hotels";
import Search from "../../components/search/Search";



import "./Home.scss";

const Home = () => {
  


  return (
    <div className="home-container">
      <div className="home-left-block">
        <Search />
        <Chosen />
      </div>
      <div className="home-right-block">
       <Hotels/>
      </div>
    </div>
  );
};

export default Home;
