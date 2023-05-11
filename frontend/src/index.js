import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ProductLayout from "./routes/ProductsLayaud";
import ErrorPage from "./error-page";
import App from "./App";
import Admin from "./routes/Admin";
import "./App.css";
import "./Hovers.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Products",
    element: <ProductLayout />,
  },
  {
    path: "/Products/Admin",
    element: <Admin/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);