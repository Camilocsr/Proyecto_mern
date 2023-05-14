import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./App";
import Admin from "./routes/Admin";
import "./App.css";
import "./Hovers.css"
import LoginForm from "./components/LoginAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Products",
    element: <Admin/>,
  },
  {
    path: "/Products/Admin",
    element: <LoginForm/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
