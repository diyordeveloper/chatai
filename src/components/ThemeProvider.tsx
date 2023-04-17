import React, { ReactNode, createContext, useState, useEffect } from "react";
import { DARK_THEME, LIGHT_THEME } from "./colors";
import SwitchClick from "../assets/SwitchClick.mp3";
import SwitchButton from "../assets/SwitchButton.mp3";
interface ThemeContextProps {
  darkMode: any;
  COLORS: any;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: localStorage.getItem("theme"),
  COLORS: localStorage.getItem("theme"),
  toggleTheme: () => {},
});
type Props = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme"));

  const toggleTheme = () => {
    if (localStorage.getItem("theme") == null) {
      // @ts-ignore
      setDarkMode((prev) => !prev);
      localStorage.setItem("theme", "dark");
      const audio = new Audio(SwitchClick);
      audio.play();
    } else {
      localStorage.removeItem("theme");
      // @ts-ignore
      setDarkMode((prev) => !prev);
      const audio = new Audio(SwitchButton);
      audio.play();
    }
  };
  let COLORS = darkMode ? DARK_THEME : LIGHT_THEME;
  const themes: ThemeContextProps = {
    darkMode,
    COLORS,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};
