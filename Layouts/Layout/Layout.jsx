import { Home } from "../../Views";
import s from "./Layout.module.scss";
const Layout = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

export default Layout;
