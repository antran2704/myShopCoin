import Menu from "../../../Menu/Menu";
import WidthDrawal from "./WidthDrawal/WidthDrawal";
import "./WidthDrawalPage.scss";

function WidthDrawalPage({width}) {
  return (
    <div className="drawPage">
      {width > 700 && <Menu />}
      <WidthDrawal />
    </div>
  );
}

export default WidthDrawalPage;
