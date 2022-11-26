import { useEffect } from "react";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { useBooks } from "./domain/book/hooks";

function App() {
  const { books, state, error, refresh } = useBooks();

  useEffect(() => {
    const intervalId = setInterval(refresh, 30000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <AppHeader />
      {state === "loading" && <h2 className="text-meta">Loading books...</h2>}
      {state === "error" && <h2 className="error">{error?.message}</h2>}
      {state === "success" && <BookList books={books} />}
    </div>
  );
}

export default App;
