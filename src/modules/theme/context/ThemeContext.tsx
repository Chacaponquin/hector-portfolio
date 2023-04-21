import React, { createContext, useEffect, useState } from 'react';
import { THEME } from '../constants/THEME.enum';

interface ThemeContextProps {
  theme: THEME;
  changeTheme: (theme: THEME) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME.DARK,
  changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<THEME>(THEME.DARK);

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme');

    if (saveTheme) {
      setTheme(saveTheme as THEME);
    } else {
      setTheme(THEME.LIGHT);
    }

    const root = window.document.documentElement;
    root.classList.remove(theme);
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, []);

  const changeTheme = (newTheme: THEME) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const data = { theme, changeTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
