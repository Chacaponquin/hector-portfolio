// eslint-disable-next-line import/named
import { AnimationControls } from 'framer-motion'
import { CvButton, Logo, Menu, Sections } from './components'
import { Section } from '../../../../modules/shared/components'
import { useNavbar } from './hooks'

interface Props {
  navBarAnimate: AnimationControls
  handleDownloadCV(): void
}

export default function Navbar({ navBarAnimate, handleDownloadCV }: Props) {
  const { SECTIONS, handleChangeOpenMenu, openMenu } = useNavbar()

  return (
    <div className="w-full flex justify-center px-8 absolute top-0 left-0">
      <Section>
        <nav className="flex items-center justify-between text-xl py-5 z-[40] overflow-y-hidden w-full">
          <Logo />

          <div className="flex items-center">
            <Sections navBarAnimate={navBarAnimate} sections={SECTIONS} />
            <CvButton handleDownloadCV={handleDownloadCV} navBarAnimate={navBarAnimate} />
            <Menu openMenu={openMenu} handleChangeOpenMenu={handleChangeOpenMenu} />
          </div>
        </nav>
      </Section>
    </div>
  )
}