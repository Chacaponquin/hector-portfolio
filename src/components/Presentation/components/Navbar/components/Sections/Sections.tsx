// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion'
import { Section } from '../../../../../../modules/app/interfaces/section'

interface Props {
  navBarAnimate: AnimationControls
  sections: Array<Section>
}

export default function Sections({ navBarAnimate, sections }: Props) {
  return (
    <motion.div
      className="hidden xl:flex items-center dark:text-primaryColor text-primaryColor gap-x-5 mr-6"
      animate={navBarAnimate}
    >
      {sections.map((section, index) => (
        <motion.a href={`#${section.id}`} key={index}>
          <motion.div>
            <p className="text-base transition-all duration-200 hover:opacity-80 font-fontCode">{section.navLabel}</p>
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  )
}
