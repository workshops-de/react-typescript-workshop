import { configureStore, combineReducers } from "@reduxjs/toolkit";
import count from "./count";
import books from "./books";

export const rootReducer = combineReducers({
  count,
  books,
});

export type StoreT = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
