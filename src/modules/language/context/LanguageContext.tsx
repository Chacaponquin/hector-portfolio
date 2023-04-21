import { LANGUAGES } from '../constants/LANGUAGES.enum';
import React, { useState } from 'react';

interface LanguageContextProps {
  language: LANGUAGES;
}

const LanguageContext = React.createContext<LanguageContextProps>({
  language: LANGUAGES.EN,
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN);

  const data = { language };

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>;
};

export { LanguageContext, LanguageProvider };
