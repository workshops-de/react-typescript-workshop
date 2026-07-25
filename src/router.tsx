import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { createRootRoute, createRouter } from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: App,
  errorComponent: ErrorScreen,
});

const routeTree = rootRoute;

export const router = createRouter({ routeTree });
