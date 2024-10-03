import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = function () {
  return useContext(ThemeContext).theme;
};
export const useSetTheme = function () {
  return useContext(ThemeContext).setTheme;
};
