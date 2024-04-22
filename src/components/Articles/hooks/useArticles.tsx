import { APP_IMAGES } from '../../../modules/app/constants'
import { useTranslation } from '../../../modules/language/hooks'
import { Article } from '../interfaces'

export default function useArticles() {
  const { FIRST_DESCRIPTION, SECOND_DESCRIPTION } = useTranslation({
    FIRST_DESCRIPTION: {
      en: 'A simple and functional implementation to translate a web application made in React using hooks without the need to use external dependencies.',
      es: 'Una implementación sencilla y funcional para traducir una aplicación web hecha en React utilizando hooks sin necesidad de utilizar dependencias externas.',
    },
    SECOND_DESCRIPTION: {
      en: 'Proposal of a functional architecture to improve the scalability and maintainability of projects made with React.',
      es: 'Propuesta de una arquitectura funcional para mejorar la escalabilidad y mantenibilidad de proyectos hechos con React.',
    },
  })

  const ARTICLES: Array<Article> = [
    {
      image: APP_IMAGES.ARTICLES.FIRST,
      title: 'A simple guide to translate a React App (without i18next)',
      link: 'https://medium.com/@hectorangel2001/a-simple-guide-to-translate-a-react-app-without-i18next-c9ea803613f2',
      description: FIRST_DESCRIPTION,
    },
    {
      image: APP_IMAGES.ARTICLES.SECOND,
      title: 'Escalabilidad en React (Parte 1): Estructura de archivos',
      link: 'https://medium.com/@hectorangel2001/escalabilidad-en-react-parte-1-estructura-de-archivos-872d12cc070d',
      description: SECOND_DESCRIPTION,
    },
  ]

  return { ARTICLES }
}
