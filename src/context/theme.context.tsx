import { createContext, FC, useMemo, useState } from "react";

interface IThemeContext {
  backgroundColor: string;
  setBackgroundColor: (value: string) => void;
  foregroundColor: string;
  setForegroundColor: (value: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({} as any);

const ThemeContextProvider: FC = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [foregroundColor, setForegroundColor] = useState("#000");
  const value = useMemo(() => {
    return {
      backgroundColor,
      setBackgroundColor,
      foregroundColor,
      setForegroundColor,
    };
  }, [backgroundColor, foregroundColor]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
