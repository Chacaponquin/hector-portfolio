import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { useSections } from '../../modules/app/hooks'
import { Me } from '../../modules/icon/components'
import { Image, Text } from './components'

export default function About() {
  const { ABOUT } = useSections()

  return (
    <SectionContainer id={ABOUT.id}>
      <SectionHeader title={ABOUT.title} icon={Me} />

      <div className="flex w-full items-center">
        <Image />
        <Text />
      </div>
    </SectionContainer>
  )
}
