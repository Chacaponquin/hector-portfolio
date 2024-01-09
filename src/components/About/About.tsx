import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { Me } from '../../modules/icon/components'
import { useTranslation } from '../../modules/language/hooks'

export default function About() {
  const { TITLE } = useTranslation({ TITLE: { en: 'About me', es: 'Sobre mi' } })

  return (
    <SectionContainer>
      <SectionHeader title={TITLE} icon={Me} />
    </SectionContainer>
  )
}
