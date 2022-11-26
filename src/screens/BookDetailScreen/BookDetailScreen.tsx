import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBook, type Book } from "../../domain/book";

export const BookDetailScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (isbn) {
      fetchBook(isbn).then((book) => setBook(book));
    }
  }, [isbn]);

  if (!book) return <div>Loading...</div>;
  return (
    <div>
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <p>
        by {book.author}, published by {book.publisher}
      </p>
      <small>
        ISBN: {book.isbn} {book.numPages} pages
      </small>
      <div></div>

      <h4>Abstract</h4>
      <p>{book.abstract}</p>
      <strong>{book.price}</strong>
    </div>
  );
};
