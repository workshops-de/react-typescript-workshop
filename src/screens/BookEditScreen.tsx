import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBook, updateBook } from "../domain/book/api";
import { Book } from "../domain/book/Book";

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book>();
  const [title, setTitle] = useState("");
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

    updateBook({ ...book, title })
      .then((data) => console.log("Updated successfully. Response:", data))
      .catch((err) => console.error("Error while updating book. Error:", err));
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      {titleError && <div className="error">{titleError}</div>}
      <button type="submit" className="m-top">
        <span>💾</span>
        Save
      </button>
    </form>
  );
};
