import clsx from 'clsx'
import { IconProps } from '../../../../../../modules/icon/interfaces'

interface Props {
  icon: React.FC<IconProps>
  title: string
}

export default function Header({ icon, title }: Props) {
  const HEADER_CLASS = clsx(
    'flex items-center justify-center',
    'text-center text-white text-2xl py-4 stroke-white',
    'bg-secondColor dark:bg-blue-7',
    'gap-x-7',
    'rounded-tl rounded-tr',
  )

  return (
    <header className={HEADER_CLASS}>
      {icon({ size: 25 })}
      <h1 className="font-fontCodeBold">{title}</h1>
    </header>
  )
}
