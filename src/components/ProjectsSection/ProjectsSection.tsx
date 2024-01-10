import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { useProjectSection } from './hooks'
import { Card } from './components'
import { SourceCode } from '../../modules/icon/components'
import { useTranslation } from '../../modules/language/hooks'

export default function ProjectsSection() {
  const { PROJECTS } = useProjectSection()
  const { TITLE_SECTION } = useTranslation({ TITLE_SECTION: { en: 'Projects', es: 'Proyectos' } })

  return (
    <SectionContainer>
      <SectionHeader title={TITLE_SECTION} icon={SourceCode} />

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-5 justify-between gap-y-3">
        {PROJECTS.map((project, index) => (
          <Card
            key={index}
            alt={project.image.alt}
            image={project.image.image}
            description={project.description}
            externalLink={project.externalLink}
            githubLink={project.githubLink}
            madeWith={project.madeWith}
            title={project.title}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
