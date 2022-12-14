import { useState } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { AppHeader } from "./components/AppHeader";
import type { Theme } from "./domain/theme/Theme";
import { ThemeContext } from "./domain/theme/ThemeContext";
import store from "./store";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");

  const theme: Theme = {
    primaryColor,
    setPrimaryColor,
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={theme}>
        <div className="app">
          <AppHeader />
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
