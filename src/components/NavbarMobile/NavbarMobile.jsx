import { BiHistory, BiMoney, BiStoreAlt } from "react-icons/bi";
import {BsPersonLinesFill} from "react-icons/bs"
import { RiHandCoinLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import "./NavbarMobile.scss";

function NavbarMobile() {
  return (
    <div className="navmobile">
      <ul className="navmobile__list">
        <li className="navmobile__item">
          <BiStoreAlt className="navmobile__icon" />
          <p className="navmobile__name">Buy Coins</p>
        </li>
        <li className="navmobile__item">
          <RiHandCoinLine className="navmobile__icon" />
          <p className="navmobile__name">My Coins</p>
        </li>
        <li className="navmobile__item">
          <BiHistory className="navmobile__icon" />
          <p className="navmobile__name">History</p>
        </li>
        <li className="navmobile__item">
          <BiMoney className="navmobile__icon" />
          <p className="navmobile__name">Deposit</p>
        </li>
        <li className="navmobile__item">
          <BsPersonLinesFill className="navmobile__icon" />
          <p className="navmobile__name">Withdraw</p>
        </li>
        <li className="navmobile__item">
          <ImProfile className="navmobile__icon" />
          <p className="navmobile__name">My Profile</p>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMobile;
