import { Link } from "react-router-dom";
import imgs from "../../assets/imgs";
import { useViewport } from "../hooks/hook";
import "./Navbar.scss";
function Navbar({check}) {
  const [width] = useViewport();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__wrap">
          <a onClick={check} className="navbar__logo">
            <img src={imgs.logo} alt="" />
          </a>
          {width > 700 && (
            <ul className="navbar__menu">
              <li className="navbar__menu-item">
                <a href="/my-coin" className="navbar__menu-link">
                  My control
                </a>
                <ul className="navbar__menu-second">
                  <li className="navbar__second-item">
                    <a href="/my-profile" className="navbar__second-link">
                      Dashboard
                    </a>
                  </li>
                  <li className="navbar__second-item">
                    <Link to="/my-coin" className="navbar__second-link">
                      My Coins
                    </Link>
                  </li>
                  <li className="navbar__second-item">
                    <Link to="/my-deposit" className="navbar__second-link">
                      Deposit
                    </Link>
                  </li>
                  <li className="navbar__second-item">
                    <Link to="/my-draw" className="navbar__second-link">
                      Withdraw
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navbar__menu-item">
                <a href="/" className="navbar__menu-link">
                  Partner
                </a>
              </li>
              <li className="navbar__menu-item">
                <a href="/" className="navbar__menu-link">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="navbar__footer">
          {width > 700 && <p className="navbar__money">$0.00 USDT</p>}
          <button className="navbar__btn">
            antran
            {width > 700 && <p className="">Standard</p>}
            <ul className="navbar__menu-second">
              <li className="navbar__second-item">
                <a
                  href="https://coin-silk.vercel.app/login"
                  className="navbar__second-link"
                >
                  Logout
                </a>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
