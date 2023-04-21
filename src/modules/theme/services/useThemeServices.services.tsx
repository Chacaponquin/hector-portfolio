import { THEME } from '../constants/THEME.enum';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export function useThemeServices() {
  const { theme, changeTheme } = useContext(ThemeContext);

  function getTheme() {
    return theme;
  }

  const isLight = theme === THEME.LIGHT;

  return { getTheme, changeTheme, isLight };
}
