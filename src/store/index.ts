import { configureStore, combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  count: (state = 0) => state,
  books: (state = []) => state,
});

export type StoreT = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
