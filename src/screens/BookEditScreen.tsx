import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchBook } from "../domain/book/api";
import { Book } from "../domain/book/Book";

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book>();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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

  const navigateBack = () => {
    navigate(-1);
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
      />
      {titleError && <div className="error">{titleError}</div>}
      <div className="edit-buttons">
        <button type="submit">
          <span>💾</span>
          Save
        </button>
        <button type="button" className="secondary" onClick={navigateBack}>
          <span>❌</span>
          Cancel
        </button>
      </div>
    </form>
  );
};
