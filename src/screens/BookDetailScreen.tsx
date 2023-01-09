import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
        <span>⬅️ </span>Back to books
      </Link>
      <img src={book.cover} alt={book.title} />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      <small>
        {book.isbn} | {book.numPages} pages
      </small>
      <h2 className="m-top m-bottom">{book.price}</h2>
      <p className="m-top">{book.abstract}</p>

      <Link to="edit" className="m-top">
        <button>
          <span>✏️</span>
          Edit
        </button>
      </Link>
    </div>
  );
};
