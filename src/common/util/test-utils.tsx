import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// reducers
import books from "../../store/books";
import count from "../../store/count";
import { MemoryRouter } from "react-router";

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
