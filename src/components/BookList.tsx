import type { Book } from "../domain/book/Book";
import { ThemeContext } from "../domain/theme/ThemeContext";
import { BookListItem } from "./BookListItem";

const localTheme = { primaryColor: "steelblue", setPrimaryColor: () => {} };

interface BookListProps {
  books: Book[];
}

const getMinPages = (books: Book[]) => {
  return books.reduce((minPages, book) => {
    return Math.min(minPages, book.numPages);
  }, Number.MAX_SAFE_INTEGER);
};

const getMaxPages = (books: Book[]) => {
  // We can also use the arrow function shorthand for reduce (see getMinPages for the longer syntax)
  return books.reduce((maxPages, book) => Math.max(maxPages, book.numPages), 0);
};

export const BookList = ({ books }: BookListProps) => {
  return (
    <ThemeContext.Provider value={localTheme}>
      <div className="book-list">
        <small className="text-meta">
          Showing {books.length} books with {getMinPages(books)} to{" "}
          {getMaxPages(books)} pages.
        </small>
        {books.map((b) => (
          <BookListItem key={b.id} book={b} />
        ))}
      </div>
    </ThemeContext.Provider>
  );
};
