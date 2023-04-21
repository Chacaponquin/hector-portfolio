import { THEME } from '../constants/THEME.enum';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export function themeServices() {
  const { theme, changeTheme } = useContext(ThemeContext);

  function getTheme() {
    return theme;
  }

  return { getTheme, changeTheme };
}
