import React, { createContext, useState } from 'react';
import { THEME } from '../constants/THEME.enum';

interface ThemeContextProps {
  theme: THEME;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME.DARK,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<THEME>(THEME.DARK);

  const data = { theme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
