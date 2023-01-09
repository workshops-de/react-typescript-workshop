import { useState } from "react";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import { AppHeader } from "./components/AppHeader";
import { Theme } from "./domain/theme/Theme";
import { ThemeContext } from "./domain/theme/ThemeContext";
import store from "./store";
import { Outlet } from "react-router";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");

  const theme: Theme = {
    primaryColor,
    setPrimaryColor,
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <AppHeader />
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
