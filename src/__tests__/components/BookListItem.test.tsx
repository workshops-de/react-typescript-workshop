import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { BookListItem } from "../../components/BookListItem";
import { Book } from "../../domain/book/Book";

describe("components/BookListItem", () => {
  const book = {
    id: "1",
    title: "My book",
    isbn: "my-isbn",
    price: "$11.11",
  } as Book;

  test("renders book with title", () => {
    render(<BookListItem book={book} />, {
      wrapper: MemoryRouter,
    });

    expect(screen.getByText(book.title)).toBeTruthy();
  });

  test(`renders a BookListItem correctly`, () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <BookListItem book={book} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
