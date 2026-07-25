import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { BooksScreen } from "./screens/BooksScreen";
import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";

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

const routeTree = rootRoute.addChildren([indexRoute, booksRoute, aboutRoute]);

export const router = createRouter({ routeTree });
