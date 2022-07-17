import data from "./index";
import {Link} from "react-router-dom"
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu__list">
        {data.map((item, index) => {
          return (
            <Link key={index} to={item.to} className="menu__link">
              <li className="menu__item">
                <item.icon className="menu__icon" />
                <p className="menu__name">{item.title}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
