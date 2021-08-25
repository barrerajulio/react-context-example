import { createContext, FC, useMemo, useState } from "react";

interface IGlobalContext {
  counter: number;
  setCounter: (counter: number) => void;
}

export const GlobalContext = createContext<IGlobalContext>({} as any);

const GlobalContextProvider: FC = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const value = useMemo(() => {
    return {
      counter,
      setCounter,
    };
  }, [counter]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
