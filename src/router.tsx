import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { BooksScreen } from "./screens/BooksScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { fetchBook } from "./domain/book/api";

const rootRoute = createRootRoute({
  component: App,
  errorComponent: ErrorScreen,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/books" });
  },
});

const booksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/books",
  component: BooksScreen,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutScreen,
});

const bookDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/books/$isbn",
  component: BookDetailScreen,
  loader: ({ params: { isbn } }) => {
    return fetchBook(isbn);
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  booksRoute,
  aboutRoute,
  bookDetailRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
