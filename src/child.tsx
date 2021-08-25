import React, { FC, useContext } from "react";
import ChildBaby from "./child-baby";
import { GlobalContext } from "./context/global.context";

interface IChildProps {
  onClick?: () => void;
}

const Child: FC<IChildProps> = () => {
  const { counter, setCounter } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <h1>Child :D</h1>
      <ChildBaby />
      <button onClick={() => setCounter(counter - 1)}>Restar contador</button>
    </React.Fragment>
  );
};

export default Child;
