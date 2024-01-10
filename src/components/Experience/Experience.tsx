import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { Experience as ExperienceIcon } from '../../modules/icon/components'
import { useTranslation } from '../../modules/language/hooks'
import { ExpCard, TimeLine } from './components'
import { useExperience } from './hooks'

export default function Experience() {
  const { CARDS } = useExperience()

  const { TITLE } = useTranslation({ TITLE: { en: 'Experience', es: 'Experiencia' } })

  return (
    <SectionContainer>
      <SectionHeader title={TITLE} icon={ExperienceIcon} />

      <div className="flex flex-col w-full gap-y-4 relative items-start md:items-center h-max">
        {CARDS.map((card, index) => (
          <ExpCard key={index} limit={card.limits} notes={card.notes} position={card.position} odd={index % 2 === 0} />
        ))}

        <TimeLine />
      </div>
    </SectionContainer>
  )
}
