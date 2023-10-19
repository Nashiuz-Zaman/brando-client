// main react imports
import React from "react";
import ReactDOM from "react-dom/client";

// react router import
import { RouterProvider } from "react-router-dom";

// router import
import router from "./router/router";

// context provider
import ThemeProvider from "./Providers/ThemeProvider";
import AuthProvider from "./Providers/AuthProvider";
import RegistrationProvider from "./Providers/RegistrationProvider";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RegistrationProvider>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </RegistrationProvider>
    </AuthProvider>
  </React.StrictMode>
);
