import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { useSections } from '../../modules/app/hooks'
import { Article } from '../../modules/icon/components'
import { Article as ArticleComp } from './components'
import { useArticles } from './hooks'

export default function Articles() {
  const { ARTICLES: ARTICLES_SECTION } = useSections()
  const { ARTICLES } = useArticles()

  return (
    <SectionContainer id={ARTICLES_SECTION.id}>
      <SectionHeader icon={Article} title={ARTICLES_SECTION.title} />

      <div className="flex flex-col gap-y-3">
        {ARTICLES.map((article, index) => (
          <ArticleComp key={index} article={article} left={index % 2 === 0} />
        ))}
      </div>
    </SectionContainer>
  )
}
