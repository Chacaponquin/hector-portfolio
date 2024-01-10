import { useTranslation } from '../../language/hooks'
import { Section } from '../interfaces/section'

export default function useSections() {
  const NAV = useTranslation({
    PROYECTS: { en: 'Projects', es: 'Proyectos' },
    ABOUT: { en: 'About', es: 'Acerca mi' },
    SKILLS: { en: 'Skills', es: 'Habilidades' },
    ARTICLES: { en: 'Articles', es: 'Artículos' },
    EXPERIENCE: { en: 'Experience', es: 'Trayectoria' },
  })

  const TITLES = useTranslation({
    PROYECTS: { en: 'Projects', es: 'Proyectos' },
    ABOUT: { en: 'About', es: 'Acerca mi' },
    SKILLS: { en: 'Skills', es: 'Habilidades' },
    ARTICLES: { en: 'Articles', es: 'Artículos' },
    EXPERIENCE: { en: 'Experience', es: 'Trayectoria' },
  })

  const PROYECTS = { id: 'proyects', title: TITLES.PROYECTS, navLabel: NAV.PROYECTS }
  const ABOUT = { id: 'about-me', title: TITLES.ABOUT, navLabel: NAV.ABOUT }
  const SKILLS = { id: 'skills', title: TITLES.SKILLS, navLabel: NAV.SKILLS }
  const ARTICLES = { id: 'articles', title: TITLES.ARTICLES, navLabel: NAV.ARTICLES }
  const EXPERIENCE = { id: 'experience', title: TITLES.EXPERIENCE, navLabel: NAV.EXPERIENCE }

  const SECTIONS: Array<Section> = [PROYECTS, ABOUT, SKILLS, ARTICLES, EXPERIENCE]

  return { SECTIONS, PROYECTS, ABOUT, SKILLS, ARTICLES, EXPERIENCE }
}
