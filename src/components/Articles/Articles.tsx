import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { Article } from '../../modules/icon/components'
import { useTranslation } from '../../modules/language/hooks'

export default function Articles() {
  const { TITLE } = useTranslation({ TITLE: { en: 'Articles', es: 'Artículos' } })

  return (
    <SectionContainer>
      <SectionHeader icon={Article} title={TITLE} />
    </SectionContainer>
  )
}
