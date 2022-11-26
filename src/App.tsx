import { useEffect, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { useBooks } from "./domain/book/hooks";
import { Theme } from "./domain/theme/Theme";
import { ThemeContext } from "./domain/theme/ThemeContext";

function App() {
  const { books, state, error, refresh } = useBooks();
  const [primaryColor, setPrimaryColor] = useState("tomato");

  const theme: Theme = {
    primaryColor,
    setPrimaryColor,
  };

  useEffect(() => {
    const intervalId = setInterval(refresh, 30000);
    return () => clearInterval(intervalId);
  });

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <AppHeader />
        {state === "loading" && (
          <h2 className="text-meta m-top">Loading books...</h2>
        )}
        {state === "error" && <h2 className="error m-top">{error.message}</h2>}
        {state === "success" && <BookList books={books} />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
