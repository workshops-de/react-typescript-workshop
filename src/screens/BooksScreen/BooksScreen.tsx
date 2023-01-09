import { BookList } from "../../components/BookList";
import { useBooksRedux } from "../../domain/book";

export const BooksScreen = () => {
  const { books } = useBooksRedux();
  return <BookList books={books} />;
};
