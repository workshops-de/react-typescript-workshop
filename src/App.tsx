import { useState } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import "./App.css";

import { AppHeader } from "./components/AppHeader";
import { ThemeEditor } from "./components/ThemeEditor";
import { ThemeContext, Theme } from "./domain/theme";
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
        <div className="App">
          <ThemeEditor />
          <AppHeader />
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
