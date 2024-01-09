import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

export function useTranslationServices() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return { language, changeLanguage };
}
