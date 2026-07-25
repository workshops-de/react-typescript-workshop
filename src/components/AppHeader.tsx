import { Link } from "@tanstack/react-router";
import { usePrimaryColor } from "../domain/theme/hooks";
import logo from "../images/logo.png";
import { ThemeEditor } from "./ThemeEditor";

export const AppHeader = () => {
  const primaryColor = usePrimaryColor();

  const links = [
    { path: "/books", text: "Books" },
    { path: "/about", text: "About" },
  ] as const;
  // as const is important here to still get some typesafety

  return (
    <header className="app-header">
      <img src={logo} alt="Awesome comic-style monkey with sunglasses" />
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
      <ThemeEditor />
      <nav>
        {/* 
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link> 
        */}

        {links.map(({ path, text }) => (
          <Link to={path} activeProps={{ style: { color: primaryColor } }}>
            {text}
          </Link>
        ))}
      </nav>
    </header>
  );
};
