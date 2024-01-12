import { LANGUAGES } from '../../../modules/language/constants'
import { useLanguage } from '../../../modules/language/hooks'

export default function usePresentation() {
  const { language } = useLanguage()

  function handleDownloadCV() {
    const link = document.createElement('a')
    link.download = 'Héctor Gómez CV'

    if (language === LANGUAGES.EN) {
      link.href = '/cvs/EN.pdf'
    } else {
      link.href = '/cvs/ES.pdf'
    }

    link.click()
  }

  return { handleDownloadCV }
}
