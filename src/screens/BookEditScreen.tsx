import { useEffect, useState, type FormEvent } from "react";
import { Link, useParams } from "react-router";
import { fetchBook } from "../domain/book/api";
import type { Book } from "../domain/book/Book";

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book>();
  const [title, setTitle] = useState("");
  const [titleTouched, setTitleTouched] = useState(false);

  const titleError =
    title.length < 5 && "The title must be at least 5 characters long.";

  useEffect(() => {
    if (!isbn) return;
    fetchBook(isbn).then((book) => {
      setBook(book);
    });
  }, [isbn]);

  useEffect(() => {
    if (!book || book.title === undefined) return;
    setTitle(book.title);
  }, [book]);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (titleError || !book) return;

    alert(title);
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        required
        minLength={5}
        onChange={(ev) => setTitle(ev.target.value)}
        onBlur={() => setTitleTouched(true)}
        style={{ borderBottom: titleError ? "2px solid red" : "" }}
      />
      {titleTouched && titleError && <div className="error">{titleError}</div>}
      <div className="edit-buttons">
        <button type="submit" disabled={!!titleError}>
          Save
        </button>
        <Link to=".." relative="path">
          <button className="tertiary" type="button">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};
