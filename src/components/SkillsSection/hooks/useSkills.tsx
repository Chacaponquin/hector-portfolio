import { APP_IMAGES } from '../../../modules/app/constants'
import { Backend, CodeLanguages, Frontend } from '../../../modules/icon/components'
import { useTranslation } from '../../../modules/language/hooks'
import { Skill } from '../interfaces'

export default function useSkills() {
  const { LANGUAGE } = useTranslation({ LANGUAGE: { en: 'Languages', es: 'Lenguajes' } })

  const SKILLS: Array<Skill> = [
    {
      title: 'Frontend',
      skills: [
        { tech: 'React js', image: APP_IMAGES.SKILLS.REACT },
        { tech: 'Angular', image: APP_IMAGES.SKILLS.ANGULAR },
        { tech: 'HTML', image: APP_IMAGES.SKILLS.HTML },
        { tech: 'CSS', image: APP_IMAGES.SKILLS.CSS },
        { tech: 'Next js', image: APP_IMAGES.SKILLS.NEXT },
        { tech: 'Tailwind CSS', image: APP_IMAGES.SKILLS.TAILWIND },
      ],
      icon: Frontend,
    },
    {
      title: 'Backend',
      skills: [
        { tech: 'Nest js', image: APP_IMAGES.SKILLS.NESTJS },
        { tech: 'MongoDB', image: APP_IMAGES.SKILLS.MONGODB },
        { tech: 'GraphQL', image: APP_IMAGES.SKILLS.GRAPHQL },
        { tech: 'Docker', image: APP_IMAGES.SKILLS.DOCKER },
        { tech: 'Postgresql', image: APP_IMAGES.SKILLS.POSTGRESQL },
      ],
      icon: Backend,
    },
    {
      title: LANGUAGE,
      skills: [
        { tech: 'Typescript', image: APP_IMAGES.SKILLS.TS },
        { tech: 'Javascript', image: APP_IMAGES.SKILLS.JS },
        { tech: 'Python', image: APP_IMAGES.SKILLS.PYTHON },
        { tech: 'Git', image: APP_IMAGES.SKILLS.GIT },
        { tech: 'Go', image: APP_IMAGES.SKILLS.GO },
      ],
      icon: CodeLanguages,
    },
  ]

  return { SKILLS }
}
