// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion'
import { Section } from '../../../../../../modules/app/interfaces/section'
import clsx from 'clsx'

interface Props {
  navBarAnimate: AnimationControls
  sections: Array<Section>
}

export default function Sections({ navBarAnimate, sections }: Props) {
  const SECTION_CLASS = clsx(
    'text-base',
    'px-3 py-1',
    'font-fontCode',
    'rounded-sm',
    'transition-all duration-200',
    'dark:hover:bg-scale-10/50 hover:bg-blue-4 hover:text-white',
    'dark:text-primaryColor text-primaryColor',
  )

  return (
    <motion.div className="hidden xl:flex items-center mr-5 gap-x-1" animate={navBarAnimate}>
      {sections.map((section, index) => (
        <motion.a href={`#${section.id}`} key={index}>
          <motion.div>
            <p className={SECTION_CLASS}>{section.navLabel}</p>
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  )
}
