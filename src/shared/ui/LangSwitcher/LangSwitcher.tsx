import { useTranslation } from "react-i18next";
import { classnames } from "shared/lib/classNames";
import cls from "./LangSwitcher.module.scss";
import Button, { ThemeButton } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classnames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};

export default LangSwitcher;
