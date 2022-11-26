import { Book } from "./Book";

export const fetchBooks = () => {
  return fetch(`${process.env.REACT_APP_URL_API}/books`).then((res) =>
    res.json()
  ) as Promise<Book[]>;
};
