import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import CopyRight from "./components/CopyRight/CopyRight";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import BuyHistoryPage from "./components/Home/Pages/BuyHistoryPage/BuyHistoryPage";
import MyCoinPage from "./components/Home/Pages/MyCoinPage/MyCoinPage";
import WidthDrawalPage from "./components/Home/Pages/WidthDrawalPage/WidthDrawalPage";
import { useViewport } from "./components/hooks/hook";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
export const LoadingTheme = createContext();

function App() {
  const [width] = useViewport()
  const [isLoading, setIsLoading] = useState(true);
  const [render,setRender] = useState(true)
  const [coins,setCoins] = useState([]);
  const getCoinData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    setCoins(res.data)
    setIsLoading(false);
  }

  function loading() {
    setIsLoading(true);
  }

  useEffect(() => {
    const handle = setTimeout(function () {
      getCoinData()
      setRender(true)
    }, 1600);
   
    return () => {
      clearTimeout(handle);
    };
  }, [isLoading]);

  return (
    <LoadingTheme.Provider value={loading}>
      <div className="App">
        <Router>
          <Navbar />
          {width < 700 && <NavbarMobile />}
          <Routes>
              <Route path="/" element= {<Home coins = {coins} render = {render}/>}/>
              <Route path="/my-coin" element= {<MyCoinPage width = {width}/>}/>
              <Route path="/my-history" element= {<BuyHistoryPage width = {width}/>}/>
              <Route path="/my-draw" element= {<WidthDrawalPage width = {width}/>}/>
          </Routes>
          {isLoading && <Loading />}
          {width > 700 && <Footer />}
          <CopyRight />
        </Router>
      </div>
    </LoadingTheme.Provider>
  );
}

export default App;
