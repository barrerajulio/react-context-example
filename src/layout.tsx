import { useContext } from "react";
import { ThemeContext } from "./context/theme.context";
import SiblingLeft from "./sibling-left";
import SiblingRight from "./sibling-right";

const Layout = () => {
  const { backgroundColor, foregroundColor } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor, color: foregroundColor }}>
      <div className="App">
        <SiblingLeft />
        <SiblingRight />
      </div>
    </div>
  );
};

export default Layout;
