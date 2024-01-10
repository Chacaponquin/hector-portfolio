import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface Props {
  odd: boolean
}

export default function Point({ odd }: Props) {
  const [bigScreen, setBigScreen] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => {
      const width = window.innerWidth

      if (width > 768) {
        setBigScreen(true)
      } else {
        setBigScreen(false)
      }
    })
  }, [])

  const CLASS = clsx('absolute', 'min-w-[17px] min-h-[17px] rounded-full', 'bg-blue-4', 'z-30', {
    'left-0': (odd && bigScreen) || !bigScreen,
    'right-0': !odd && bigScreen,
    'top-7': !bigScreen,
  })

  const MOVE = bigScreen ? 36.5 : 35.5

  return <div className={CLASS} style={{ transform: odd ? `translateX(-${MOVE}px)` : `translateX(${MOVE}px)` }}></div>
}
