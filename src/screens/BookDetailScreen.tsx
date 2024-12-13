import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { bookSelector } from "../store/books";

export const BookDetailScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();

  // Possibility 1: fetch books and store books in local React state
  // const [book, setBook] = useState<Book>();

  // useEffect(() => {
  //   if (!isbn) return;
  //   fetchBook(isbn).then(setBook);
  // }, [isbn]);

  // Possibility 2 (via Redux): retrieve book from Redux store (Bonus task)
  const book = useSelector(bookSelector(isbn));

  if (!book) return <div>Loading...</div>;

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

      <Link to="edit">
        <button>Edit</button>
      </Link>
    </div>
  );
};
