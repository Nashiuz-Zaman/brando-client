// react router imports
import { createBrowserRouter } from "react-router-dom";

// layout component
import RootLayout from "../components/layout/RootLayout/RootLayout";

// page components
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Registration/Registration";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import AddProduct from "../components/pages/AddProduct/AddProduct";

// route component
import PrivateRoute from "../components/route/PrivateRoute/PrivateRoute";

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
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
