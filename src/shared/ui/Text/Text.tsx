import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface TextProps {
  classname?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const Text = (props: TextProps) => {
  const { classname, title, text, theme } = props;

  return (
    <div
      className={classNames(cls.textWrapper, { [cls[theme || ""]]: true }, [
        classname || "",
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};

export default Text;
