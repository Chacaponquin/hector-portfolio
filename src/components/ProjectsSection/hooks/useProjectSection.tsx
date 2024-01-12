import { APP_IMAGES } from '../../../modules/app/constants/APP_IMAGES'
import { useTranslation } from '../../../modules/language/hooks'
import { Project } from '../interfaces'

export default function useProjectSection() {
  const { CHACA_DESCRIPTION, CHACA_WEB_DESCRIPTION, CHACA_DOCS_DESCRIPTION, CRYPTO_DESCRIPTION } = useTranslation({
    CHACA_DESCRIPTION: {
      en: 'A Node package developed to create realistic datasets and export them for use in real projects',
      es: 'Un paquete de Node desarrollado para crear datasets realistas y exportarlos para ser utilizados en proyectos reales',
    },
    CHACA_WEB_DESCRIPTION: {
      en: 'Web application created to extend the use of Chaca to any type of user and not be limited to developers',
      es: 'Aplicación web creada para  ampliar el uso de Chaca a cualquier tipo de usuario y no limitarse a los desarrolladores',
    },
    CRYPTO_DESCRIPTION: {
      en: 'A web application dedicated to current information on the value status of the main cryptocurrencies around the world',
      es: 'Una aplicación web dedicada a la información actual del estado de valor de las principales cryptomonedas alrededor del mundo',
    },
    CHACA_DOCS_DESCRIPTION: {
      en: 'A web page that documents the Chaca package functionalities',
      es: 'Una página web que documenta las funcionalidades del paquete Chaca',
    },
  })

  const PROJECTS: Array<Project> = [
    {
      title: 'Chaca',
      image: APP_IMAGES.CHACA_NPM_IMAGE,
      madeWith: ['Typescript'],
      externalLink: 'https://www.npmjs.com/package/chaca',
      githubLink: 'https://github.com/Chacaponquin/chaca',
      description: CHACA_DESCRIPTION,
    },
    {
      title: 'Chaca Web',
      image: APP_IMAGES.CHACA_WEB_IMAGE,
      madeWith: ['Typescript', 'React', 'Tailwind CSS', 'Framer Motion', 'Nest js', 'Mongo DB'],
      externalLink: 'https://github.com/Chacaponquin/chaca-front',
      githubLink: 'https://github.com/Chacaponquin/chaca-front',
      description: CHACA_WEB_DESCRIPTION,
    },
    {
      title: 'CH-Crypto',
      image: APP_IMAGES.CRYPTO_IMAGE,
      madeWith: ['React', 'Chart.js', 'Tailwind CSS'],
      externalLink: 'https://ch-crypto.vercel.app',
      githubLink: 'https://github.com/Chacaponquin/ch-crypto-app',
      description: CRYPTO_DESCRIPTION,
    },
    {
      title: 'Chaca Docs',
      description: CHACA_DOCS_DESCRIPTION,
      externalLink: 'https://chaca-doc.vercel.app/',
      githubLink: 'https://github.com/Chacaponquin/chaca-doc-website',
      image: APP_IMAGES.CHACA_DOCS_IMAGE,
      madeWith: ['Docusaurus', 'Typescript'],
    },
  ]

  return { PROJECTS }
}
