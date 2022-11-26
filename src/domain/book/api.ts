import type { Book } from "./Book";

export const fetchBooks = () => {
  return fetch(`${import.meta.env.VITE_REACT_APP_URL_API}/books`).then((res) =>
    res.json()
  ) as Promise<Book[]>;
};
