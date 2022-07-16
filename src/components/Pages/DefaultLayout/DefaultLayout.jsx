import Menu from "../../Menu/Menu";
import "./DefaultLayout.scss";

function DefaultLayout({width,children}) {
  return (
    <div className="defaultLayout">
      {width > 700 && <Menu />}
      {children}
    </div>
  );
}

export default DefaultLayout;
