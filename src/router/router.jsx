// react router imports
import { createBrowserRouter } from "react-router-dom";

// app component
import RootLayout from "../components/layout/RootLayout/RootLayout";

// page components
import Home from "../components/pages/Home/Home";
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
    ],
  },
]);

export default router;
