import { Book } from "../../domain/book";
import { BookListItem } from "../BookListItem";

export interface BookListProps {
  books: Book[];
}
export const BookList = ({ books }: BookListProps) => {
  return (
    <>
      {books.map((book) => (
        <BookListItem book={book} key={book.id}></BookListItem>
      ))}
    </>
  );
};
