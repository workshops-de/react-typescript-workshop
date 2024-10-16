import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { fetchBook, updateBook } from "../domain/book/api";
import { Book } from "../domain/book/Book";
import { validateBookForm } from "../domain/book/validation";

type BookFormValues = z.infer<typeof validateBookForm>;

export const BookEditScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<Book>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormValues>({
    mode: "onTouched",
    resolver: zodResolver(validateBookForm),
  });

  console.log({ errors });
  useEffect(() => {
    if (!isbn) return;
    fetchBook(isbn).then((book) => {
      setBook(book);
    });
  }, [isbn]);

  useEffect(() => {
    if (!book || book.title === undefined) return;
  }, [book]);

  const onSubmit = ({ title, numPages, author }: BookFormValues) => {
    if (!book) return;

    updateBook({ ...book, title, numPages, author })
      .then((data) => console.log("Updated successfully. Response:", data))
      .catch((err) => console.error("Error while updating book. Error:", err));
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input defaultValue={book?.title} {...register("title")} type="text" />
      <input defaultValue={book?.author} {...register("author")} type="text" />
      <input
        defaultValue={book?.numPages}
        {...register("numPages")}
        type="number"
      />

      {errors.title && <div className="error">{errors.title.message}</div>}
      {errors.author && <div className="error">{errors.author.message}</div>}
      {errors.numPages && (
        <div className="error">{errors.numPages.message}</div>
      )}

      <button type="submit" className="m-top">
        <span>💾</span>
        Save
      </button>
    </form>
  );
};
