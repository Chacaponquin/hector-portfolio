import clsx from 'clsx'
import { Close, Config, Sections } from './components'

interface Props {
  handleChangeOpenMenu(): void
  openMenu: boolean
}

export default function Dropdowm({ handleChangeOpenMenu, openMenu }: Props) {
  const CLASS = clsx(
    'fixed right-0 top-0',
    'min-h-[500px] w-[500px] esm:w-full h-screen',
    'shadow-lg',
    'bg-dark-blue-10',
    'flex flex-col justify-between',
    'z-30',
    'px-10 py-5',
    'transition-all duration-300',
  )

  return (
    <div className={CLASS} style={{ transform: openMenu ? `translateX(0)` : `translateX(100%)` }}>
      <Close handleChangeOpenMenu={handleChangeOpenMenu} />
      <Sections handleChangeOpenMenu={handleChangeOpenMenu} />
      <Config />
    </div>
  )
}
