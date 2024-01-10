// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion'
import { Buttons } from './components'
import { useTranslation } from '../../../../modules/language/hooks'

interface Props {
  principalTextAnimate: AnimationControls
  handleDownloadCV(): void
}

export default function Text({ principalTextAnimate, handleDownloadCV }: Props) {
  const { HELLO_MESSAGE, FULLSTACK_TITLE, FIRST_TEXT, SECOND_TEXT } = useTranslation({
    HELLO_MESSAGE: { en: "Hi, I'm", es: 'Hola, soy' },
    FULLSTACK_TITLE: { en: 'fullstack developer', es: 'desarrollador fullstack' },
    FIRST_TEXT: { en: 'I am a software engineer and', es: 'Soy un ingeniero de software y' },
    SECOND_TEXT: {
      en: 'dedicated mainly to the development of useful web applications.',
      es: 'dedicado principalmente al desarrollo de apliaciones web de gran utilidad',
    },
  })

  return (
    <motion.div
      className="flex flex-col max-w-[600px] gap-y-2"
      transition={{ duration: 0.8 }}
      animate={principalTextAnimate}
      initial={{ translateY: '1000px' }}
    >
      <p className="font-fontCode text-2xl text-secondColor dark:text-primaryColor esm:text-xl">{HELLO_MESSAGE}</p>
      <h1 className="font-fontTitle text-7xl esm:text-6xl">Héctor Gómez</h1>
      <div className="text-xl esm:text-lg mb-6 text-black dark:text-white">
        {FIRST_TEXT} <p className="inline text-secondColor  dark:text-primaryColor">{FULLSTACK_TITLE}</p> {SECOND_TEXT}
      </div>

      <Buttons handleDownloadCV={handleDownloadCV} />
    </motion.div>
  )
}
