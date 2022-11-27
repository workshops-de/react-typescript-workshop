import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { fetchBook, type Book, updateBook } from "../../domain/book";

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

  const titleError =
    title.length < 5 ? "The title must be at least 5 characters long" : "";
  const [titleWasTouched, setTitleWasTouched] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (titleError || !book) {
      return;
    }

    await updateBook({
      ...book,
      title,
    });
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
          onBlur={() => setTitleWasTouched(true)}
        ></input>
        {titleWasTouched && titleError && <p>{titleError}</p>}
      </div>

      <button type="submit" disabled={Boolean(titleError)}>
        Save
      </button>
    </form>
  );
};
