import React,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./App";
import Admin from "./routes/Admin";
import "./App.css";
import "./Hovers.css"
import LoginForm from "./components/LoginAdmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const router = createBrowserRouter([
  {
    path: "/Proyecto_mern",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Proyecto_mern/Products",
    element: <Admin/>,
  },
  {
    path: "/Proyecto_mern/Products/Admin",
    element: <LoginForm/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
