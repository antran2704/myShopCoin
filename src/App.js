import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useViewport } from "./components/hooks/hook";

import "./App.scss";
import CopyRight from "./components/CopyRight/CopyRight";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import DefaultLayout from "./components/Pages/DefaultLayout/DefaultLayout";
import routes from "./components/routes";

export const LoadingTheme = createContext();

function App() {
  const [width] = useViewport();
  const [isLoading, setIsLoading] = useState(true);
  const [render, setRender] = useState(true);
  const [coins, setCoins] = useState([]);
  const [inforCoin, setInforCoin] = useState();
  const getCoinData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoins(res.data);
    setIsLoading(false);
  };

  function loading() {
    setIsLoading(true);
  }

  function handleCheckLocation() {
    if (window.location.pathname != "/") {
      window.location.pathname = "/";
    }
  }

  function getInforCoin(data) {
    setInforCoin(data)
    console.log(data)
  }

  useEffect(() => {
    const handle = setTimeout(function () {
      getCoinData();
      setRender(true);
    }, 1600);

    return () => {
      clearTimeout(handle);
    };
  }, [isLoading]);

  return (
    <LoadingTheme.Provider value={loading}>
      <div className="App">
        <Router>
          <Navbar check={handleCheckLocation} />
          {width < 700 && <NavbarMobile check={handleCheckLocation} />}
          <Routes>
            <Route path="/" element={<Home data = {getInforCoin} coins={coins} render={render} />} />
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.to}
                  element={
                    <DefaultLayout width = {width}>
                      <route.component data={inforCoin}/>
                    </DefaultLayout>
                  }
                />
              );
            })}
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
