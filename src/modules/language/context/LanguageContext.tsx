import { LANGUAGES } from '../constants/LANGUAGES.enum';
import React, { useEffect, useState } from 'react';

interface LanguageContextProps {
  language: LANGUAGES;
  changeLanguage: (language: LANGUAGES) => void;
}

const LanguageContext = React.createContext<LanguageContextProps>({
  language: LANGUAGES.EN,
  changeLanguage() {},
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN);

  useEffect(() => {
    const navLanguage = navigator.language;

    if (navLanguage.includes('es')) {
      setLanguage(LANGUAGES.ES);
    } else if (navLanguage.includes('en')) {
      setLanguage(LANGUAGES.EN);
    } else {
      setLanguage(LANGUAGES.EN);
    }
  }, []);

  function changeLanguage(newLanguage: LANGUAGES) {
    setLanguage(newLanguage);
  }

  const data = { language, changeLanguage };

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>;
};

export { LanguageContext, LanguageProvider };
