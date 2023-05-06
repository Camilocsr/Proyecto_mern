import React from "react";
import ReactDOM from "react-dom/client";
import 'react-bulma-components';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ProductLayout from "./routes/ProductsLayaud";
import ErrorPage from "./error-page";
import App from "./App";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Products",
    element: <ProductLayout />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);