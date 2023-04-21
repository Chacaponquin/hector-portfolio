import React, { createContext, useState } from 'react';
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

  const changeTheme = (theme: THEME) => {
    setTheme(theme);
  };

  const data = { theme, changeTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
