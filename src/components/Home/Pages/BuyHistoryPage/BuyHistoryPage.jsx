import Menu from "../../../Menu/Menu";
import "./BuyHistoryPage.scss";
import BuyHistory from "./BuyHistory/BuyHistory";

function BuyHistoryPage({width}) {
  return (
    <div className="buyPage">
      {width > 700 && <Menu />}
      <BuyHistory />
    </div>
  );
}

export default BuyHistoryPage;
