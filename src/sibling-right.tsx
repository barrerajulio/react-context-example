import React, { FC } from "react";
import { useContext } from "react";

import Child from "./child";
import { GlobalContext } from "./context/global.context";
import { ThemeContext } from "./context/theme.context";

interface ISiblingRightProps {
  onClick?: () => void;
}

const SiblingRight: FC<ISiblingRightProps> = ({ onClick }) => {
  const { counter } = useContext(GlobalContext);
  const { setBackgroundColor, setForegroundColor } = useContext(ThemeContext);
  const handleOnClick = () => {
    setBackgroundColor("#f00");
    setForegroundColor("#fff");
  };
  return (
    <React.Fragment>
      <h1>Contador de clicks {counter}</h1>
      <button onClick={handleOnClick}>Cambiar fondo</button>
      <Child />
    </React.Fragment>
  );
};

export default SiblingRight;
