import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

export function useLanguageServices() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return { language, changeLanguage };
}
