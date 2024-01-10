import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { useSections } from '../../modules/app/hooks'
import { Article } from '../../modules/icon/components'

export default function Articles() {
  const { ARTICLES } = useSections()

  return (
    <SectionContainer id={ARTICLES.id}>
      <SectionHeader icon={Article} title={ARTICLES.title} />
    </SectionContainer>
  )
}
