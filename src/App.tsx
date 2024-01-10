import { useAnimation } from 'framer-motion'
import {
  About,
  Articles,
  Experience,
  Footer,
  InitialLoader,
  Presentation,
  ProjectsSection,
  SkillsSection,
} from './components'

export default function App() {
  const textAnimate = useAnimation()
  const modalAnimate = useAnimation()
  const blockAnimate = useAnimation()
  const navBarAnimate = useAnimation()
  const principalTextAnimate = useAnimation()
  const meImageAnimation = useAnimation()

  function initialShowText() {
    textAnimate.start({ translateY: 0 })
  }

  function initialAnimation() {
    textAnimate.start({ translateY: -200 }).then(() => {
      textAnimate.start({ display: 'none' }).then(() => {
        blockAnimate
          .start({ display: 'none' })
          .then(() => modalAnimate.start({ height: '0px' }))
          .then(() => navBarAnimate.start({ translateY: 0 }))
          .then(() => principalTextAnimate.start({ translateY: 0 }))
          .then(() => meImageAnimation.start({ translateX: 0 }))
      })
    })
  }

  return (
    <div className="dark:text-white dark:bg-primaryDarkColor text-black transition-all duration-300 overflow-x-hidden">
      <InitialLoader
        blockAnimate={blockAnimate}
        initialAnimation={initialAnimation}
        initialShowText={initialShowText}
        modalAnimate={modalAnimate}
        textAnimate={textAnimate}
      />
      <Presentation
        principalTextAnimate={principalTextAnimate}
        navBarAnimate={navBarAnimate}
        meImageAnimation={meImageAnimation}
      />
      <SkillsSection />
      <ProjectsSection />
      <Experience />
      <Articles />
      <About />
      <Footer />
    </div>
  )
}
