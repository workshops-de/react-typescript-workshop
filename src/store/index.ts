import { combineReducers, configureStore } from "@reduxjs/toolkit";
import books from "./books";
import count from "./count";

export const rootReducer = combineReducers({
  count,
  books,
});

export type StoreT = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
