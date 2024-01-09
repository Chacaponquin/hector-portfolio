import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { Experience as ExperienceIcon } from '../../modules/icon/components'
import { useTranslation } from '../../modules/language/hooks'

export default function Experience() {
  const { TITLE } = useTranslation({ TITLE: { en: 'Experience', es: 'Experiencia' } })

  return (
    <SectionContainer>
      <SectionHeader title={TITLE} icon={ExperienceIcon} />
    </SectionContainer>
  )
}
