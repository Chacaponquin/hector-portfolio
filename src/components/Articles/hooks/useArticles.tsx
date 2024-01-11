import { APP_IMAGES } from '../../../modules/app/constants'
import { useTranslation } from '../../../modules/language/hooks'
import { Article } from '../interfaces'

export default function useArticles() {
  const { DESCRIPTION } = useTranslation({
    DESCRIPTION: {
      en: 'A simple and functional implementation to translate a web application made in React using hooks without the need to use external dependencies.',
      es: 'Una implementación sencilla y funcional para traducir una aplicación web hecha en React utilizando hooks sin necesidad de utilizar dependencias externas.',
    },
  })

  const ARTICLES: Array<Article> = [
    {
      image: APP_IMAGES.ARTICLES.FIRST,
      title: '📖 A simple guide to translate a React App (without i18next)',
      link: 'https://medium.com/@hectorangel2001/a-simple-guide-to-translate-a-react-app-without-i18next-c9ea803613f2',
      description: DESCRIPTION,
    },
  ]

  return { ARTICLES }
}
