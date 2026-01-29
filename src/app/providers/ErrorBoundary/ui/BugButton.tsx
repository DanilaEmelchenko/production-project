import { useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";

// Компонент для тестирование
const BugButton = () => {
  const [error, serError] = useState(false);

  const onThrow = () => serError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>throw error</Button>;
};

export default BugButton;
