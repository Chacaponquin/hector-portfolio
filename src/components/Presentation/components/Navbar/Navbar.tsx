// eslint-disable-next-line import/named
import { AnimationControls } from 'framer-motion'
import { CvButton, Logo, Menu } from './components'
import { Section } from '../../../../modules/shared/components'
import { useNavbar } from './hooks'

interface Props {
  navBarAnimate: AnimationControls
  handleDownloadCV(): void
}

export default function Navbar({ navBarAnimate, handleDownloadCV }: Props) {
  const { handleChangeOpenMenu, openMenu } = useNavbar()

  return (
    <div className="w-full flex justify-center px-8 fixed top-0 left-0 z-[40] dark:bg-primaryDarkColor bg-white shadow-lg">
      <Section>
        <nav className="flex items-center justify-between text-xl py-5 overflow-y-hidden w-full">
          <Logo />

          <div className="flex items-center">
            <CvButton handleDownloadCV={handleDownloadCV} navBarAnimate={navBarAnimate} />
            <Menu openMenu={openMenu} handleChangeOpenMenu={handleChangeOpenMenu} />
          </div>
        </nav>
      </Section>
    </div>
  )
}
