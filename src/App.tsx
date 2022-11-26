import { useEffect, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { BookList } from "./components/BookList";
import { fetchBooks } from "./domain/book/api";
import type { Book } from "./domain/book/Book";
import type { FetchState } from "./domain/book/FetchState";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [state, setState] = useState<FetchState>("initial");

  useEffect(() => {
    setState("loading");
    fetchBooks()
      .then((books) => {
        setBooks(books);
        setState("success");
      })
      .catch(() => {
        setState("error");
      });
  }, []);

  return (
    <div className="app">
      <AppHeader />
      {state === "loading" && <h2 className="text-meta">Loading books...</h2>}
      {state === "error" && (
        <h2 className="error">Error while loading books</h2>
      )}
      {state === "success" && <BookList books={books} />}
    </div>
  );
}

export default App;
