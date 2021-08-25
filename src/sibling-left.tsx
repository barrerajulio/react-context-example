import React from "react";
import { useContext } from "react";
import Child from "./child";
import { ThemeContext } from "./context/theme.context";

const SiblingLeft = () => {
  const { setBackgroundColor, setForegroundColor } = useContext(ThemeContext);
  const handleOnClick = () => {
    setBackgroundColor("#fff");
    setForegroundColor("#000");
  };
  return (
    <React.Fragment>
      <Child />
      <button onClick={handleOnClick}>Restaurar color</button>
    </React.Fragment>
  );
};

export default SiblingLeft;
