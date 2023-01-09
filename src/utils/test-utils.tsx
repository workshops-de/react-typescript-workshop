/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import { render, type RenderOptions } from "@testing-library/react";
import React, { type PropsWithChildren } from "react";
import { Provider } from "react-redux";

// reducers
import { MemoryRouter } from "react-router";
import books from "../store/books";
import count from "../store/count";

// mockstore
const store = configureStore({ reducer: { books, count } });

// wrapper for redux and react-router
const AllTheProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

// re-export the entire testing library
export * from "@testing-library/react";
// override render method
export { customRender as render, AllTheProviders as Wrapper };
