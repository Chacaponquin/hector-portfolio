// eslint-disable-next-line import/named
import { AnimationControls } from 'framer-motion'
import { Section } from '../../modules/shared/components'
import { Image, PresentationNavBar, Text } from './components'
import { usePresentation } from './hooks'

interface Props {
  navBarAnimate: AnimationControls
  principalTextAnimate: AnimationControls
  meImageAnimation: AnimationControls
}

export default function Presentation({ navBarAnimate, principalTextAnimate, meImageAnimation }: Props) {
  const { handleDownloadCV } = usePresentation()

  return (
    <div className="flex w-scrren 2xl:h-screen pt-36 2xl:pt-0 2xl:pb-0 pb-20 justify-center px-8 items-center">
      <Section>
        <div className="w-full h-full flex flex-col">
          <PresentationNavBar navBarAnimate={navBarAnimate} />

          <div className="h-max flex items-center w-full overflow-hidden justify-between">
            <Text principalTextAnimate={principalTextAnimate} handleDownloadCV={handleDownloadCV} />
            <Image meImageAnimation={meImageAnimation} />
          </div>
        </div>
      </Section>
    </div>
  )
}
