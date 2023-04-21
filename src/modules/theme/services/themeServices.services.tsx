import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export function themeServices() {
  const { theme } = useContext(ThemeContext);

  function getTheme() {
    return theme;
  }

  return { getTheme };
}
