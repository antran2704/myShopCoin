import "./Coin.scss";

function Coin({ data }) {
  return (
    <div className="coin">
      <h3 className="coin__header">BUY COIN</h3>
      {data ? (
        <div className="coin__wrap">
          <div className="coin__infor">
            <img src={data.image} alt="" className="coin__img" />
          </div>
          <div className="coin__infor">
            <h3 className="coin__title">Coin Symbol:</h3>
            <p className="coin__symbol">{data.symbol.toUpperCase()}</p>
          </div>
          <div className="coin__infor">
            <h3 className="coin__title">Coin Full Name:</h3>
            <p className="coin__content">{data.name.toUpperCase()}</p>
          </div>
          <div className="coin__infor">
            <h3 className="coin__title">Coin Price:</h3>
            <p
              className={`${
                data.price_change_percentage_24h > 0
                  ? "text-succes"
                  : "text-danger"
              } coin__price`}
            >
              {data.price_change_percentage_24h}
            </p>
          </div>
        </div>
      ) :

      <div className="coin__footer">
            <p className="coin__footer-desc">You don't Have any coins</p>
            <button className="coin__footer-btn">
                <a href="/" className="coin__footer-link">Buy coins</a>
            </button>
      </div>
    }
    </div>
  );
}

export default Coin;
