import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classnames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classnames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
