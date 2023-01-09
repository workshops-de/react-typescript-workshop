import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, booksListSelector } from "../../store/books";
import { Book } from "./Book";
import { fetchBooks } from "./api";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    // Possibility 1: local async function that gets immediately called
    async function fetchData() {
      setBooks(await fetchBooks());
    }
    fetchData();

    // Possibility 2: respond to promise resolution with .then handler
    // fetchBooks().then(setBooks);
  }, []);

  return {
    books,
  };
};

export const useBooksRedux = () => {
  const books = useSelector(booksListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      dispatch(addBooks(data));
    };
    fetchData();
  }, [dispatch]);

  return { books };
};
