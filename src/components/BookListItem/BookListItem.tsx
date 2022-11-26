import { useState } from "react";
import { Book } from "../../domain/book";
import { Hideable } from "../Hideable";

export interface BookListItemProps {
  book: Book;
}
export const BookListItem = ({ book }: BookListItemProps) => {
  const isFree = book.price === "$0.00";

  const [numLikes, setNumLikes] = useState(0);

  return (
    <div>
      <h2 style={{ textDecoration: isFree ? "underline" : "none" }}>
        {numLikes >= 5 && <span> &#11088; </span>}
        {book.title}
        {isFree && <span> &#x1F4B0;</span>}
      </h2>
      <h3>{book.subtitle}</h3>
      <div>by {book.author}</div>
      <div>
        <button onClick={() => setNumLikes(numLikes + 1)}>
          &#128079; {numLikes}
        </button>
      </div>
      <Hideable>{book.abstract}</Hideable>
    </div>
  );
};
