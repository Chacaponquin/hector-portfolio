import { useTranslation } from '../../../modules/language/hooks'
import { ExperienceCard } from '../interfaces'

export default function useExperience() {
  const { UNIVERSITY } = useTranslation({
    UNIVERSITY: {
      en: '"José Antonio Echeverría" Technological University',
      es: 'Universidad Tecnológica "José Antonio Echeverría"',
    },
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
      limits: { init: 'Septiembre 2021', finish: 'Actualidad' },
      notes: [UNIVERSITY_NOTES.FIRST, UNIVERSITY_NOTES.SECOND, UNIVERSITY_NOTES.THIRD],
    },
    {
      position: 'Desarrollador Junior',
      limits: { init: 'Abril 2022', finish: 'Diciembre 2022' },
      notes: [JUNIOR_NOTES.FIRST, JUNIOR_NOTES.SECOND],
    },
  ]

  return { CARDS }
}
