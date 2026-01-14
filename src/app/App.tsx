import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { classnames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classnames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
