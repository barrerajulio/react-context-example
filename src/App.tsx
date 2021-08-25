import GlobalContextProvider from "./context/global.context";
import ThemeContextProvider from "./context/theme.context";
import Layout from "./layout";

function App() {
  return (
    <ThemeContextProvider>
      <GlobalContextProvider>
        <Layout />
      </GlobalContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
