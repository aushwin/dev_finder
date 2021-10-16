import React from "react";

export const ThemeModes = {
  Light: "",
  Dark: "dark",
};

export const ThemeContext = React.createContext({
  mode: ThemeModes.Dark,
  toggleTheme: () => {},
});
