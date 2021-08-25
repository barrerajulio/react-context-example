import React from "react";
import { useContext } from "react";
import { FC } from "react";
import { GlobalContext } from "./context/global.context";

interface IChildBabyProps {
  onClick?: () => void;
}

const ChildBaby: FC<IChildBabyProps> = () => {
  const { counter, setCounter } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <h1>Child :) baby</h1>
      <button onClick={() => setCounter(counter + 1)}>Presioname</button>
    </React.Fragment>
  );
};

export default ChildBaby;
