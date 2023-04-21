import { LANGUAGES } from '../constants/LANGUAGES.enum';

export type LanguageConfig = { [language in LANGUAGES]: string };

export type LanguageObject<T> = {
  [key in keyof T]: LanguageConfig;
};

export type ReturnLanguageObject<T> = {
  [key in keyof T]: string;
};
