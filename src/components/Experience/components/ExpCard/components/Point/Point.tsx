import clsx from 'clsx'

interface Props {
  odd: boolean
}

export default function Point({ odd }: Props) {
  const CLASS = clsx('absolute', 'min-w-[17px] min-h-[17px] rounded-full', 'bg-blue-4', 'z-30', {
    'left-0': odd,
    'right-0': !odd,
  })

  const MOVE = 36.5

  return <div className={CLASS} style={{ transform: odd ? `translateX(-${MOVE}px)` : `translateX(${MOVE}px)` }}></div>
}
