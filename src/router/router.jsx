// react router imports
import { createBrowserRouter } from "react-router-dom";

// app component
import App from "../App";

// page components
import Home from "../components/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
