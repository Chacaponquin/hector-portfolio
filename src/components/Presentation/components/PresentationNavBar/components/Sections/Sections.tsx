// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion'
import { Section } from '../../interfaces'

interface Props {
  navBarAnimate: AnimationControls
  sections: Array<Section>
}

export default function Sections({ navBarAnimate, sections }: Props) {
  return (
    <div className="flex items-center text-primaryColor gap-x-5 mr-6">
      {sections.map((section, index) => (
        <a href={section.id} key={index}>
          <motion.div animate={navBarAnimate}>
            <p className="text-base transition-all duration-200 hover:opacity-80">{section.title}</p>
          </motion.div>
        </a>
      ))}
    </div>
  )
}
