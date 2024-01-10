import { SOCIAL_MEDIA } from '../../../../../../modules/shared/constants'
import { ExternalLink } from '../../../../../../modules/app/components'
// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion'

interface Props {
  navBarAnimate: AnimationControls
}

export default function Sections({ navBarAnimate }: Props) {
  return (
    <div className="flex items-center text-primaryColor md:gap-x-10 gap-x-6">
      {SOCIAL_MEDIA.map((el, i) => (
        <ExternalLink link={el.link} key={i} className="h-max dark:stroke-primaryColor stroke-secondColor">
          <motion.div
            animate={navBarAnimate}
            className="flex items-center h-max gap-x-3 transition-all duration-300 hover:opacity-70 fill-none"
            initial={{ translateY: '400px' }}
            transition={{ duration: 0.5 }}
          >
            {el.icon({ size: 20 })}
            <h1 className="font-fontBlack font-fontCode xl:block hidden">{el.name}</h1>
          </motion.div>
        </ExternalLink>
      ))}
    </div>
  )
}
