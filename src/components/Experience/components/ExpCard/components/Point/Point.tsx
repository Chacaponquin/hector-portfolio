import clsx from 'clsx'

interface Props {
  odd: boolean
  bigScreen: boolean
}

export default function Point({ odd, bigScreen }: Props) {
  const CLASS = clsx('absolute', 'min-w-[17px] min-h-[17px] rounded-full', 'bg-blue-4', 'z-30', {
    'left-0': (odd && bigScreen) || !bigScreen,
    'right-0': !odd && bigScreen,
    'top-7': !bigScreen,
  })

  const MOVE = bigScreen ? 36.5 : 36.5

  return (
    <div
      className={CLASS}
      style={{ transform: (odd && bigScreen) || !bigScreen ? `translateX(-${MOVE}px)` : `translateX(${MOVE}px)` }}
    ></div>
  )
}
