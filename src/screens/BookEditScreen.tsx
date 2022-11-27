import { type FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { fetchBook, patchBook } from "../domain/book/api";
import type { Book } from "../domain/book/Book";
import { useFormBucket } from "../utils/useFormBucket";

type EditBookDTO = Pick<
  Book,
  "title" | "subtitle" | "author" | "numPages" | "price"
>;

const blankEditBookDTO: EditBookDTO = {
  title: "",
  subtitle: "",
  author: "",
  numPages: 0,
  price: "",
};

const validateBook = (values: EditBookDTO) => {
  return {
    title:
      values.title.length < 5
        ? "Please enter a title thats at least five characters long"
        : undefined,
    author:
      values.author.length < 2 ? "Please enter a valid author name" : undefined,
    numPages:
      values.numPages < 1
        ? "Your book should have at least one page!"
        : undefined,
    price: !/^\$\d+\.\d{2}$/.test(values.price)
      ? "Please enter a price in the format $0.00"
      : undefined,
  };
};

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book>();
  const [initialValuesString, setInitialValuesString] = useState("");
  const navigate = useNavigate();

  const { values, register, isValid, errorFor, setValues } =
    useFormBucket<EditBookDTO>({
      initialValues: blankEditBookDTO,
      validate: validateBook,
    });

  useEffect(() => {
    if (!isbn) return;
    fetchBook(isbn).then((book) => {
      const dto: EditBookDTO = {
        title: book.title,
        subtitle: book.subtitle,
        author: book.author,
        numPages: book.numPages,
        price: book.price,
      };
      setBook(book);
      setInitialValuesString(JSON.stringify(dto));
      setValues(dto);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isbn]);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!book || !isValid()) return;

    patchBook(book.id, values)
      .then((data) => {
        console.log("Updated successfully. Response:", data);
        navigate("..", { relative: "path" });
      })
      .catch((err) => console.error("Error while updating book. Error:", err));
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label>
        Title
        <input type="text" {...register("title")} />
        {errorFor("title", (msg) => (
          <div className="error">{msg}</div>
        ))}
      </label>

      <label>
        Subtitle
        <input type="text" {...register("subtitle")} />
        {errorFor("subtitle", (msg) => (
          <div className="error">{msg}</div>
        ))}
      </label>

      <label>
        Author
        <input type="text" {...register("author")} />
        {errorFor("author", (msg) => (
          <div className="error">{msg}</div>
        ))}
      </label>

      <label>
        Pages
        <input type="number" min={1} {...register("numPages")} />
        {errorFor("numPages", (msg) => (
          <div className="error">{msg}</div>
        ))}
      </label>

      <label>
        Price
        <input type="text" {...register("price")} />
        {errorFor("price", (msg) => (
          <div className="error">{msg}</div>
        ))}
      </label>

      <button
        type="submit"
        disabled={initialValuesString === JSON.stringify(values)}
      >
        Save
      </button>
      <Link to={`/books/${book?.id}`}>
        <button className="tertiary" type="button">
          Cancel
        </button>
      </Link>
    </form>
  );
};
