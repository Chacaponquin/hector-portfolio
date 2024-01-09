import { useContext } from 'react';
import { LanguageConfig, LanguageObject, ReturnLanguageObject } from '../interfaces/language.interface';
import { LanguageContext } from '../context/LanguageContext';

export function useTranslation<T>(languageObject: LanguageObject<T>) {
  const { language } = useContext(LanguageContext);

  function filterLanguage(): ReturnLanguageObject<T> {
    let returnObject: ReturnLanguageObject<T> = {} as ReturnLanguageObject<T>;

    for (const [key, object] of Object.entries<LanguageConfig>(languageObject)) {
      returnObject = { ...returnObject, [key]: object[language] };
    }

    return returnObject;
  }

  return filterLanguage();
}
