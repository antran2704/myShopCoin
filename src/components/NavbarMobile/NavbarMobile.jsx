import { BiHistory, BiMoney, BiStoreAlt } from "react-icons/bi";
import {BsPersonLinesFill} from "react-icons/bs"
import { RiHandCoinLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import "./NavbarMobile.scss";
import { Link } from "react-router-dom";

function NavbarMobile({check}) {
  return (
    <div className="navmobile">
      <ul className="navmobile__list">
       <a onClick={check}>
          <li className="navmobile__item">
            <BiStoreAlt className="navmobile__icon" />
            <p className="navmobile__name">Buy Coins</p>
          </li>
       </a>
        <Link to = "/my-coin">
          <li className="navmobile__item">
            <RiHandCoinLine className="navmobile__icon" />
            <p className="navmobile__name">My Coins</p>
          </li>
        </Link>
        <Link to = "/my-history">
          <li className="navmobile__item">
            <BiHistory className="navmobile__icon" />
            <p className="navmobile__name">History</p>
          </li>
        </Link>
        <Link to = "/my-draw">
          <li className="navmobile__item">
            <BiMoney className="navmobile__icon" />
            <p className="navmobile__name">Deposit</p>
          </li>
        </Link>
       <Link to= "/my-draw">
          <li className="navmobile__item">
            <BsPersonLinesFill className="navmobile__icon" />
            <p className="navmobile__name">Withdraw</p>
          </li>
       </Link>
        <Link to = "/my-coin">
          <li className="navmobile__item">
            <ImProfile className="navmobile__icon" />
            <p className="navmobile__name">My Profile</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarMobile;
