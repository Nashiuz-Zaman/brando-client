// react icons import
import { IoSunny, IoMoon } from "react-icons/io5";

// hooks
import useTheme from "../../../hooks/useTheme";

// on clicking the button the theme will change for the entire website
const ThemeChangeBtn = () => {
  // extract theme from the hook
  const { theme, handleThemeChange } = useTheme();

  return (
    <button
      onClick={handleThemeChange}
      className="text-white transition-all duration-200 rounded-default active:text-primary active:bg-white lg:hover:text-primary flex items-center gap-2 py-1 px-2 lg:hover:bg-white"
    >
      <span className="font-semibold">Theme</span>{" "}
      {theme === "light" ? (
        <IoMoon className="text-inherit" />
      ) : (
        <IoSunny className="text-inherit"></IoSunny>
      )}
    </button>
  );
};

export default ThemeChangeBtn;
