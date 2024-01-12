import clsx from 'clsx'
import { Variants, motion } from 'framer-motion'

interface Props {
  odd: boolean
  bigScreen: boolean
}

export default function Point({ odd, bigScreen }: Props) {
  const CLASS = clsx('absolute', 'min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]', 'bg-blue-4', 'rounded-full', {
    'left-0': (odd && bigScreen) || !bigScreen,
    'right-0': !odd && bigScreen,
    'top-7': !bigScreen,
  })

  const MOVE = bigScreen ? 38 : 36.5

  const variants: Variants = {
    offscreen: {
      opacity: 0,
      transform: (odd && bigScreen) || !bigScreen ? `translateX(-${MOVE}px)` : `translateX(${MOVE}px)`,
      zIndex: 30,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.8,
      },
      transform: (odd && bigScreen) || !bigScreen ? `translateX(-${MOVE}px)` : `translateX(${MOVE}px)`,
      zIndex: 30,
    },
  }

  return (
    <motion.div
      className={CLASS}
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    />
  )
}
