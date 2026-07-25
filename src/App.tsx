import { useState } from "react";
import { AppHeader } from "./components/AppHeader";
import type { Theme } from "./domain/theme/Theme";
import { ThemeContext } from "./domain/theme/ThemeContext";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");

  const theme: Theme = {
    primaryColor,
    setPrimaryColor,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app">
        <AppHeader />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
