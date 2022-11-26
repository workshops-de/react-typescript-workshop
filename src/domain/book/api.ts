import type { Book } from "./Book";

const URL_API =
  import.meta.env.VITE_REACT_APP_URL_API || "http://localhost:4730";

export const fetchBooks = () => {
  return fetch(`${URL_API}/books`).then((res) => res.json()) as Promise<Book[]>;
};

export const fetchBook = (isbn: string) => {
  const result = fetch(`${URL_API}/books/${isbn}`).then((res) => res.json());
  return result as Promise<Book>;
};
