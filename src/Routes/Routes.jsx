import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import ErrorPage from "../Pages/Err/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("Books.json"),
        path: "/",
        Component: Home,
      },
    ],
  },
]);
