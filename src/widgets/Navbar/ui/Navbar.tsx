import { Link } from "react-router-dom";
import { classnames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classnames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
