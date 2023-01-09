import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchBook, type Book } from "../../domain/book";
import { bookSelector } from "../../store/books";

export const BookDetailScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();

  // Possibility 1: fetch books and store books in local React state
  // const [book, setBook] = useState<Book>();

  // useEffect(() => {
  //   if (isbn) {
  //     fetchBook(isbn).then((book) => setBook(book));
  //   }
  // }, [isbn]);

  // Possibility 2 (via Redux): retrieve book from Redux store (Bonus task)
  const book = useSelector(bookSelector(isbn));

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

      <div>
        <NavLink to={`/books/${book.isbn}/edit`}>
          <button>Edit</button>
        </NavLink>
      </div>
    </div>
  );
};
