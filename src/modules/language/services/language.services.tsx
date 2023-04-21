import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

export function languageServices() {
  const { language } = useContext(LanguageContext);

  function getLanguage() {
    return language;
  }

  return { getLanguage };
}
