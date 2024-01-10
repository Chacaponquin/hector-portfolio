import { Section } from '../interfaces'

export default function useNavbar() {
  const SECTIONS: Array<Section> = [
    { id: '#proyects', title: 'Proyectos' },
    { id: '#about-me', title: 'About me' },
    { id: '#skills', title: 'Skills' },
    { id: '#articles', title: 'Artículos' },
    { id: '#experience', title: 'Experiencia' },
  ]

  return { SECTIONS }
}
