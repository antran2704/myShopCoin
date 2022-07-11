import { scrollToTop, useScrollToTop } from "../hooks/hook";
import { BsArrowUpCircle } from "react-icons/bs";

import "./Home.scss";
import data from "./index";

function Home({render}) {
    const [top] = useScrollToTop()
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
        {render && <ul className="home__body">
          {data.map((item, index) => {
            return (
              <div key={index} className="home__body-wrap">
                <li className="home__body-item">
                  <div className="home__body-header">
                    <img src={item.img} alt="" />
                    <p className="home__body-name">{item.name}</p>
                  </div>
                </li>
                <li className="home__body-item home__body-price">
                  {item.price}
                </li>
                <li className="home__body-item home__time">{item.time}</li>
                <li className="home__body-item home__body-btn">
                  <button>Buy</button>
                </li>
              </div>
            );
          })}
        </ul>}
      </div>
      <BsArrowUpCircle onClick={scrollToTop} className={`scroll-top ${top > 500 ? "show" : "hidden"}`} />
    </div>
  );
}

export default Home;
