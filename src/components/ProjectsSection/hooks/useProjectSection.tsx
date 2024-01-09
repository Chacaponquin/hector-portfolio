import { APP_IMAGES } from '../../../modules/app/constants/APP_IMAGES';
import { useTranslation } from '../../../modules/language/hooks';
import { Project } from '../interfaces/project.interface';

export function useProjectSection() {
  const { CHACA_DESCRIPTION, CHACA_WEB_DESCRIPTION, CHACA_DOCS_DESCRIPTION, CRYPTO_DESCRIPTION } = useTranslation({
    CHACA_DESCRIPTION: {
      en: 'A library created for projects developed in Nodejs, with support for Typescript, dedicated to the creation of false test data, with the particularity of allowing the creation of these with rules and logic imposed by the programmer. It is still under development but has already been released up to version 1.6.1',
      es: 'Una librería creada para proyectos desarrollados en Nodejs, con soporte para Typescript, dedicada a la creación de datos de prueba falsos, con la particularidad de permitir la creación de estos con reglas y lógica impuesta por el programador. Todavía sigue en desarrollo pero ya ha sido lanzada hasta la versión 1.6.1.',
    },
    CHACA_WEB_DESCRIPTION: {
      en: 'Web application created with the aim of extending the use of the Chaca library to any type of user and not limited to Javascript developers. It is still in development along with its own server, of which a beta version should be released shortly.',
      es: 'Aplicación web creada con el objetivo de ampliar el uso de la librería Chaca a cualquier tipo de usuarioy no limitarse a los desarrolladores Javascript. Todavia está en desarrollo junto con su propio servidor, de los cuales debe salir una versión beta en poco tiempo.',
    },
    CRYPTO_DESCRIPTION: {
      en: 'A web application dedicated to current information on the value status of the main cryptocurrencies around the world.',
      es: 'Una aplicación web dedicada a la información actual del estado de valor de las principales cryptomonedas alrededor del mundo.',
    },
    CHACA_DOCS_DESCRIPTION: {
      en: 'A web page that documents the functionalities of the Nodejs Chaca library through markdowns. Developed with the Meta Docusaurus framework',
      es: 'Una página web que documenta las funcionalidades de la libreria de nodejs Chaca a traves de markdowns. Desarrollado con el framework de Meta Docusaurus',
    },
  });

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
      madeWith: [
        'Typescript',
        'React',
        'Tailwind CSS',
        'Framer Motion',
        'React Router',
        'Nest js',
        'Passport',
        'Mongo DB',
      ],
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
  ];

  return { PROJECTS };
}
