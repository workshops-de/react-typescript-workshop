import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { fetchBook, type Book } from "../../domain/book";

export type BookEditScreenRouteParams = {
  isbn: string;
};

export const BookEditScreen = () => {
  const [title, setTitle] = useState("");

  const { isbn } = useParams<BookEditScreenRouteParams>();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (isbn) {
      fetchBook(isbn).then((book) => setBook(book));
    }
  }, [isbn]);

  useEffect(() => {
    if (book) {
      setTitle(book.title);
    }
  }, [book]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(title);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setTitle(event.target.value)
        }
      ></input>

      <button type="submit">Save</button>
    </form>
  );
};
