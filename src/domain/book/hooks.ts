import { useEffect, useState } from "react";
import { fetchBook, fetchBooks } from "./api";
import type { Book } from "./Book";
import type { FetchState } from "./FetchState";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [state, setState] = useState<FetchState>("initial");
  const [error, setError] = useState<Error>();
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  const refresh = () => {
    setLastRefresh(Date.now);
  };

  useEffect(() => {
    setState("loading");
    fetchBooks()
      .then((books) => {
        setBooks(books);
        setState("success");
      })
      .catch((err) => {
        setError(err);
        setState("error");
      });
  }, [lastRefresh]);

  return {
    books,
    state,
    error,
    refresh,
  };
};

export const useBook = (isbn: string) => {
  const [book, setBook] = useState({} as Book);
  const [state, setState] = useState<FetchState>("initial");
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!isbn) return;
    setState("loading");
    fetchBook(isbn)
      .then((book) => {
        setBook(book);
        setState("success");
      })
      .catch((err) => {
        setError(err);
        setState("error");
      });
  }, [isbn]);

  return { book, state, error };
};
