import { createContext } from "react";
import type { Theme } from "./Theme";

export const ThemeContext = createContext<Theme>({
  primaryColor: "steelblue",
  setPrimaryColor: () => {},
});
