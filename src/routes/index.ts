import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Logout from "../pages/Logout";
import ErrorPage from "../components/ErrorPage";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    caseSensitive: true,
    Component: App,
    ErrorBoundary: ErrorPage,

    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/profile/:name",
        Component: Profile,
      },
      {
        path: "/settings",
        Component: Setting,
      },
    ],
  },
  {
    path: "/logout",
    caseSensitive: true,
    Component: Logout,
  },
]);
