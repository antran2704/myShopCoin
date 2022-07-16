import { useEffect, useState } from "react";
import { BiStoreAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import data from "./index";
import "./NavbarMobile.scss";

function NavbarMobile({ check }) {
  const [url, setUrl] = useState(window.location.pathname);
  function handleUrl(path) {
    setUrl(path);
  }

  useEffect(() => {
    const items = document.querySelectorAll(".navmobile__item");
    items.forEach((item) => {
      item.classList.remove("active");
      if (item.pathname == url) {
        item.classList.add("active");
      }
    });
  }, [url]);
  return (
    <div className="navmobile">
      <div className="navmobile__list">
        <a onClick={check} className="navmobile__item">
          <BiStoreAlt className="navmobile__icon" />
          <p className="navmobile__name">Buy Coins</p>
        </a>
        {data.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.to}
              onClick={function () {
                handleUrl(item.to);
              }}
              className="navmobile__item"
            >
              <item.icon className="navmobile__icon" />
              <p className="navmobile__name">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavbarMobile;
