import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { byId } from "../common/util/byId";
import { Book } from "../domain/book/Book";

import { rootReducer } from "./index";

export interface BooksState {
  list: string[];
  byId: { [id: string]: Book }; // Bonus task
}

const initialState: BooksState = {
  list: [],
  byId: {},
};

type AddBooksAction = PayloadAction<Book[]>;

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Note: You can mutate the state without having to return the new state ("Immer" is used internally by redux-toolkit to  simplify immutable update logic by allowing you to write "mutative" code in your reducers)
    addBooks(state: BooksState, action: AddBooksAction) {
      state.list = action.payload.map((book) => book.id);
      state.byId = byId<Book>(action.payload);
    },
  },
});

// Action creators generated via `createSlice`
export const { addBooks } = booksSlice.actions;

// Selectors
export const booksListSelector = (state: ReturnType<typeof rootReducer>) =>
  state.books.list.map((id) => state.books.byId[id]);

// Bonus task: Selector for a single book
export const bookSelector =
  (id?: string) => (state: ReturnType<typeof rootReducer>) =>
    id && state.books.byId[id];

// Reducer
export default booksSlice.reducer;
