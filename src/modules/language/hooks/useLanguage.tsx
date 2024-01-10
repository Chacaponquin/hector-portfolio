import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function useLanguage() {
  const { handleChangeLanguage, language } = useContext(LanguageContext)

  return { handleChangeLanguage, language }
}
