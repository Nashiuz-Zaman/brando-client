// react-router imports
import { Outlet } from "react-router-dom";

//hook
import useScrollToTop from "./../../../hooks/useScrollToTop";
import useTheme from "../../../hooks/useTheme";

function AuthLayout() {
  // hook for auto scroll to the top of the page
  useScrollToTop();

  const { theme } = useTheme();

  return (
    <div
      className={`flex justify-center items-center min-h-screen max-w-[120rem] mx-auto overflow-x-hidden font-default text-textPrimary font-medium transition-all duration-300 ${
        theme === "light" ? "bg-white" : "bg-mainDarkTheme"
      }`}
    >
      <Outlet />
    </div>
  );
}

export default AuthLayout;
