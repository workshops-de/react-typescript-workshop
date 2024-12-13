import { BookList } from "../components/BookList";
import { useBooksRedux } from "../domain/book/hooks";

export const BooksScreen = () => {
  const { books } = useBooksRedux();

  return (
    <div className="books-screen">
      <BookList books={books} />
    </div>
  );
};
