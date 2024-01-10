import clsx from 'clsx'
import { Download } from '../../../../../../modules/icon/components'
import { useTranslation } from '../../../../../../modules/language/hooks'
// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion'

interface Props {
  handleDownloadCV(): void
  navBarAnimate: AnimationControls
}

export default function CvButton({ handleDownloadCV, navBarAnimate }: Props) {
  const { TEXT } = useTranslation({ TEXT: { en: 'Download CV', es: 'Descargar CV' } })

  const CLASS = clsx(
    'flex items-center',
    'w-max',
    'py-1.5 esm:py-2 px-4 esm:px-6',
    'text-base',
    'text-secondColor dark:text-primaryColor dark:hover:text-white hover:text-white',
    'border-2 border-secondColor dark:border-primaryColor',
    'hover:bg-secondColor dark:hover:bg-blue-8',
    'transition-all duration-300',
    'font-fontCode',
    'stroke-secondColor dark:stroke-primaryColor hover:stroke-white dark:hover:stroke-white',
    'gap-x-3',
    'rounded-sm',
    'mr-4',
  )

  return (
    <motion.button className={CLASS} onClick={handleDownloadCV} animate={navBarAnimate}>
      <div className="transition-all duration-200 exsm:hidden">
        <Download size={20} />
      </div>
      <p className="font-fontCode">{TEXT}</p>
    </motion.button>
  )
}
