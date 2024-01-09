import { Section } from '../../../shared/components'

interface Props {
  children: React.ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="w-full flex justify-center px-8">
      <Section>
        <div className="w-full md:pb-32 pb-20">{children}</div>
      </Section>
    </section>
  )
}
