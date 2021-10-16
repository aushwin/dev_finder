import { useState } from "react";
import { ThemeContext, ThemeModes } from "./theme-context";

const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = useState(ThemeModes.Dark);
  const toggleThemeHandler = () => {
    setThemeMode((prevState) => {
      if (prevState === ThemeModes.Dark) return ThemeModes.Light;
      else return ThemeModes.Dark;
    });
  };

  const themeContext = {
    mode: themeMode,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
