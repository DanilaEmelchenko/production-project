import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import cls from "./LoginForm.module.scss";
import Input from "shared/ui/Input/Input";

interface LoginFormProps {
  classname?: string;
}

const LoginForm = ({ classname }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [classname || ""])}>
      <Input autoFocus placeholder={t("Введите username")} />
      <Input placeholder={t("Введите пароль")} />
      <Button className={cls.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};

export default LoginForm;
