import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // dark theme
  const darkTheme = () => setTheme("dark");

  // light theme
  const lightTheme = () => setTheme("light");

  // HTML pe class lagana (REAL THEME CHANGE)
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook (industry standard)
export const useTheme = () => {
  return useContext(ThemeContext);
};
