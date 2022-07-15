import "./Menu.scss";
import { BiHistory, BiMoney, BiStoreAlt } from "react-icons/bi";
import { BsPersonLinesFill } from "react-icons/bs";
import { RiHandCoinLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu__list">
        <Link to="/my-history" className="menu__link">
          <li className="menu__item">
            <BiStoreAlt className="menu__icon" />
            <p className="menu__name">Buy Coins</p>
          </li>
        </Link>
        <Link to="/my-coin" className="menu__link">
          <li className="menu__item">
            <RiHandCoinLine className="menu__icon" />
            <p className="menu__name">My Coins</p>
          </li>
        </Link>
        <Link to="/my-history" className="menu__link">
          <li className="menu__item">
            <BiHistory className="menu__icon" />
            <p className="menu__name">History</p>
          </li>
        </Link>
        <Link to="/my-draw" className="menu__link">
          <li className="menu__item">
            <BiMoney className="menu__icon" />
            <p className="menu__name">Deposit</p>
          </li>
        </Link>
        <a href="/my-draw" className="menu__link">
          <li className="menu__item">
            <BsPersonLinesFill className="menu__icon" />
            <p className="menu__name">Withdraw</p>
          </li>
        </a>
       <Link to="" className="menu__link">
          <li className="menu__item">
            <ImProfile className="menu__icon" />
            <p className="menu__name">My Profile</p>
          </li>
       </Link>
      </ul>
    </div>
  );
}

export default Menu;
