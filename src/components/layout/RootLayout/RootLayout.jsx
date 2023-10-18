// react-router imports
import { Outlet } from "react-router-dom";

// shared component
import Header from "../../shared/Header/Header";

// hooks
import useThemeProvider from "./../../../hooks/useThemeProvider";

function RootLayout() {
  const { theme } = useThemeProvider();

  return (
    <div
      className={`font-raleway text-textPrimary font-medium ${
        theme === "light" ? "bg-white" : "bg-textPrimary"
      }`}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;
