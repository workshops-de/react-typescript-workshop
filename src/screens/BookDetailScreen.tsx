import { Link, useLoaderData } from "react-router";
import type { Book } from "../domain/book/Book";

export const BookDetailScreen = () => {
  // const { isbn } = useParams<{ isbn: string }>();
  // const { state, book } = useBook(isbn || "");
  // if (state === "loading") return <div>Loading...</div>;

  const book = useLoaderData<Book>();

  return (
    <div className="book-detail-screen">
      <Link to="/books">
        <button className="tertiary">← Back to books</button>
      </Link>
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      <small>
        {book.isbn} | {book.numPages} pages
      </small>
      <h2>{book.price}</h2>
      <p>{book.abstract}</p>
    </div>
  );
};
