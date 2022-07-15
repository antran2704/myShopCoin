import { scrollToTop, useScrollToTop } from "../hooks/hook";
import { BsArrowUpCircle } from "react-icons/bs";

import "./Home.scss";
import data from "./index";

function Home({ render, coins }) {
  const [top] = useScrollToTop();
  return (
    <div className="home">
      <h2 className="home__title">MARKET TREND</h2>
      <div className="home__content">
        <ul className="home__header">
          <li className="home__header-item">Name</li>
          <li className="home__header-item home__price">Price</li>
          <li className="home__header-item home__time">24h Hight/ Low</li>
          <li className="home__header-item"></li>
        </ul>
        {render && (
          <ul className="home__body">
            {coins.map((coin, index) => {
              return (
                <div key={index} className="home__body-wrap">
                  <li className="home__body-item">
                    <div className="home__body-header">
                      <img src={coin.image} alt="" />
                      <p className="home__body-name">{coin.name}</p>
                    </div>
                  </li>
                  <li
                    className={
                      `${coin.price_change_percentage_24h > 0
                        ? "text-succes"
                        : "text-danger"
                      } home__body-item home__body-price`
                    }
                  >
                    {coin.price_change_percentage_24h}
                  </li>
                  <li className="home__body-item home__time">
                    {Number(coin.high_24h).toFixed(2)}/
                    {Number(coin.low_24h).toFixed(2)}
                  </li>
                  <li className="home__body-item home__body-btn">
                    <button>Buy</button>
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
      <BsArrowUpCircle
        onClick={scrollToTop}
        className={`scroll-top ${top > 500 ? "show" : "hidden"}`}
      />
    </div>
  );
}

export default Home;
