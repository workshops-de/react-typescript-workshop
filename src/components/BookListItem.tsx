import type { Book } from "../domain/book/Book";

export interface BookListItemProps {
  book: Book;
}

const getPriceRating = (price: string) => {
  const priceNumber = parseInt(price.substring(1));
  if (isNaN(priceNumber)) return "";
  if (priceNumber <= 10) return "$";
  if (priceNumber <= 30) return "$$";
  return "$$$";
};

export const BookListItem = ({ book }: BookListItemProps) => {
  const isFree = book.price === "$0.00";

  return (
    <div className={`book-list-item ${isFree ? "book-list-item_free" : ""}`}>
      <h2>
        {isFree && <span>💰 </span>}
        {book.title}
      </h2>
      <h3>{book.subtitle}</h3>
      {!isFree && (
        <div style={{ color: "green" }}>{getPriceRating(book.price)}</div>
      )}
      <div className="text-meta">by {book.author}</div>
    </div>
  );
};
