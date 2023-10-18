// react import
import PropTypes from "prop-types";
import { createContext, useState } from "react";

// create context
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  // declare theme state for overall website
  const [theme, setTheme] = useState("light");

  // pass this theme value obj into the value of the provider
  const themeValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
};
