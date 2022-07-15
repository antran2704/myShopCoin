import Menu from "../../../Menu/Menu";
import MyCoin from "./MyCoin/MyCoin";
import "./MyCoinPage.scss";

function MyCoinPage({width}) {
  return (
    <div className="coinPage">
      {width > 700 && <Menu />}
      <MyCoin />
    </div>
  );
}

export default MyCoinPage;
