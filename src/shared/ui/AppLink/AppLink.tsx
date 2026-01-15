import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { classnames } from "shared/lib/classNames";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classnames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
