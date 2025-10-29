import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, test } from "vitest";
import type { Book } from "../domain/book/Book";
import { BookList } from "./BookList";

describe("components/BookList", () => {
  // mock of a list of books
  const books = [
    { id: "1", title: "My first book", isbn: "isbn-1", price: "$11.11" },
    { id: "2", title: "My second book", isbn: "isbn-2", price: "$22.22" },
  ] as Book[]; // using a type assertion so that I don't have to add all book properties to the mock

  // test case
  test("renders all books", () => {
    // render the BookList
    render(<BookList books={books} />, {
      // Define router as wrapper so that Jest can render the `Link` component from `react-router`
      wrapper: MemoryRouter,
    });

    for (const book of books) {
      // assert that each book will be rendered to the screen
      expect(screen.getByText(book.title)).toBeTruthy();
    }
  });
});
