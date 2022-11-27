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

export const updateBook = (book: Book) => {
  return fetch(`${URL_API}/books/${book.isbn}`, {
    method: "put",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(res)
  ) as Promise<Book>;
};

export const patchBook = (isbn: string, bookPatch: Partial<Book>) => {
  return fetch(`${URL_API}/books/${isbn}`, {
    method: "PATCH", // only works uppercase with bookmonkey-api; "patch" will cause CORS-error
    body: JSON.stringify(bookPatch),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(res)
  ) as Promise<Book>;
};
