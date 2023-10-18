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
      className={`font-raleway ${theme === "light" ? "bg-white" : "bg-black"}`}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;