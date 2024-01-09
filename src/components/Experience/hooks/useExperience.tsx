import { ExperienceCard } from '../interfaces'

export default function useExperience() {
  const CARDS: Array<ExperienceCard> = [
    {
      position: 'Desarrollador Junior',
      limits: { init: 'Abril 2022', finish: 'Diciembre 2022' },
      notes: [
        'Trabajé maquetando diseños desarrollados en Figma para varias aplicaciones web de gestión y presentación',
        'Desarrollé principalmente con Angular y Express js',
      ],
    },
  ]

  return { CARDS }
}
