import { createBrowserRouter } from "react-router";
import Root from "../Pages/Roots/Root";
import ErrorPage from "../Pages/Err/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";

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
      {
        path: "/about",
        Component: About,
      },
      {
        path: "readList",
        Component: ReadList,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("Books.json"),
      },
    ],
  },
]);
