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
import LoginRegistratonProvider from "./Providers/LoginRegistrationProvider";

// redux toolkit imports
import { store } from "./app/store";
import { Provider } from "react-redux";

// style import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LoginRegistratonProvider>
        <ThemeProvider>
          <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
          </Provider>
        </ThemeProvider>
      </LoginRegistratonProvider>
    </AuthProvider>
  </React.StrictMode>
);
