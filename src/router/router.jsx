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
import BrandDetails from "../components/pages/BrandDetails/BrandDetails";
import UpdateProduct from "../components/pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../components/pages/ProductDetails/ProductDetails";
import MyCart from "../components/pages/MyCart/MyCart";

// route component
import PrivateRoute from "../components/route/PrivateRoute/PrivateRoute";

// data
import { vercelAddress } from "../data/vercelServerData";

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
        path: "/brands/:id",
        element: <BrandDetails />,
        loader: ({ params }) => {
          return fetch(`${vercelAddress}/brands/${params.id}`);
        },
      },
      {
        path: "/brands/:brandId/products/update/:productId",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:brandId/products/details/:productId",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          // extract both the params
          const brandId = params.brandId;
          const productId = params.productId;
          return fetch(
            `${vercelAddress}/brands/${brandId}/products/${productId}`
          );
        },
      },
    ],
  },
]);

export default router;
