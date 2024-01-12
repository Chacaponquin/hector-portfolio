import { useTranslation } from '../../../modules/language/hooks'
import { ExperienceCard } from '../interfaces'

export default function useExperience() {
  const { UNIVERSITY, JUNIOR } = useTranslation({
    UNIVERSITY: {
      en: '"José Antonio Echeverría" Technological University',
      es: 'Universidad Tecnológica "José Antonio Echeverría"',
    },
    JUNIOR: { en: 'Junior Developer', es: 'Desarrollador Junior' },
  })

  const DATES = useTranslation({
    UNIVERISITY_FIRST: { en: 'September 2021', es: 'Septiembre 2021' },
    UNIVERISTY_SECOND: { en: 'Present', es: 'Actualidad' },

    JUNIOR_FIRST: { en: 'April 2022', es: 'Abril 2022' },
    JUNIOR_SECOND: { en: 'Dicember 2022', es: 'Diciembre 2022' },
  })

  const JUNIOR_NOTES = useTranslation({
    FIRST: {
      en: 'I worked laying out designs developed in Figma for several management and presentation web applications',
      es: 'Trabajé maquetando diseños desarrollados en Figma para varias aplicaciones web de gestión y presentación',
    },
    SECOND: {
      en: 'I developed mainly with Javascript frameworks such as Angular and Express js',
      es: 'Desarrollé principalmente con frameworks de Javascript como Angular y Express js',
    },
  })

  const UNIVERSITY_NOTES = useTranslation({
    FIRST: {
      en: 'This has honed my problem-solving skills',
      es: 'Esto ha perfeccionado mis habilidades para resolver problemas',
    },
    SECOND: {
      en: 'I have gained proficiency in various programming languages and software tools',
      es: 'He adquirido competencia en varios lenguajes de programación y herramientas de software',
    },
    THIRD: {
      en: 'This has given me the versatility to work in various sectors such as software development and data analysis',
      es: 'Esto me ha proporcionado la versatilidad para trabajar en varios sectores como desarrollo de software y análisis de datos',
    },
  })

  const CARDS: Array<ExperienceCard> = [
    {
      position: UNIVERSITY,
      limits: { init: DATES.UNIVERISITY_FIRST, finish: DATES.UNIVERISTY_SECOND },
      notes: [UNIVERSITY_NOTES.FIRST, UNIVERSITY_NOTES.SECOND, UNIVERSITY_NOTES.THIRD],
    },
    {
      position: JUNIOR,
      limits: { init: DATES.JUNIOR_FIRST, finish: DATES.JUNIOR_SECOND },
      notes: [JUNIOR_NOTES.FIRST, JUNIOR_NOTES.SECOND],
    },
  ]

  return { CARDS }
}
