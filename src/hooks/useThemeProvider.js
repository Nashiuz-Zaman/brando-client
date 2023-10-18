// react
import { useContext } from "react";

// theme context
import { ThemeContext } from "../Providers/ThemeProvider";

export default function useThemeProvider() {
  const themeContextValue = useContext(ThemeContext);

  return themeContextValue;
}
