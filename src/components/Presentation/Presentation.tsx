// eslint-disable-next-line import/named
import { AnimationControls } from 'framer-motion'
import { Section } from '../../modules/shared/components'
import { Image, Navbar, Text } from './components'
import { usePresentation } from './hooks'

interface Props {
  navBarAnimate: AnimationControls
  principalTextAnimate: AnimationControls
  meImageAnimation: AnimationControls
}

export default function Presentation({ navBarAnimate, principalTextAnimate, meImageAnimation }: Props) {
  const { handleDownloadCV } = usePresentation()

  return (
    <div className="flex w-scrren 2xl:h-screen 2xl:min-h-[740px] pt-36 2xl:pt-10 2xl:pb-0 justify-center px-8 items-center">
      <Section>
        <div className="w-full h-full flex flex-col">
          <Navbar navBarAnimate={navBarAnimate} handleDownloadCV={handleDownloadCV} />

          <div className="h-max flex items-center w-full overflow-hidden justify-between">
            <Text principalTextAnimate={principalTextAnimate} />
            <Image meImageAnimation={meImageAnimation} />
          </div>
        </div>
      </Section>
    </div>
  )
}
