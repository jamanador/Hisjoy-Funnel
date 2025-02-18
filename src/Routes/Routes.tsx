import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CategoryPage from "../Pages/Treatment/CategoryPage";
import ErrorPage from "../Pages/Treatment/ErrorPage/ErrorPage";
import ProcessingPage from "../Pages/Treatment/ProcessingPage";
import SingleProduct from "../Pages/Treatment/SingleProduct";
import Treatment from "../Pages/Treatment/Treatment";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/home/treatment", element: <Treatment /> },
        { path: "/home/treatment/:category", element: <CategoryPage /> },
        { path: "/home/treatment/processing/:category", element: <ProcessingPage /> },
        { path: "/home/treatment/product/:category", element: <SingleProduct /> }, // Ensure this path is correct
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ]);

  return <RouterProvider router={router} />;
}
