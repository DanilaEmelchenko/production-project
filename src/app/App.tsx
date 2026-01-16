import "./styles/index.scss";
import { classnames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classnames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
