import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { Code } from '../../modules/icon/components'
import { SkillCard } from './components'
import { useTranslation } from '../../modules/language/hooks'
import { useSkills } from './hooks'

export default function SkillsSection() {
  const { TITLE_SECTION } = useTranslation({ TITLE_SECTION: { en: 'Skills', es: 'Tecnologías' } })
  const { SKILLS } = useSkills()

  return (
    <SectionContainer>
      <SectionHeader title={TITLE_SECTION} icon={Code} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-3 justify-between mt-8 h-max gap-y-6">
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </SectionContainer>
  )
}
