// react router imports
import { createBrowserRouter } from "react-router-dom";

// app component
import RootLayout from "../components/layout/RootLayout/RootLayout";

// page components
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Registration/Registration";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return fetch("/brands.json");
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
