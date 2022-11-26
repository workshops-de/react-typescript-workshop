import { usePrimaryColor } from "../domain/theme/hooks";
import logo from "../images/logo.png";
import { ThemeEditor } from "./ThemeEditor";

export const AppHeader = () => {
  const primaryColor = usePrimaryColor();

  return (
    <header className="app-header">
      <img src={logo} alt="Awesome comic-style monkey with sunglasses" />
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
      <ThemeEditor />
    </header>
  );
};
