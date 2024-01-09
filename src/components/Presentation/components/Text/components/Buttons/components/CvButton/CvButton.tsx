import clsx from 'clsx'
import { Download } from '../../../../../../../../modules/icon/components'
import { useTranslation } from '../../../../../../../../modules/language/hooks'

export default function CvButton() {
  const { TEXT } = useTranslation({ TEXT: { en: 'Download CV', es: 'Descargar CV' } })

  const CLASS = clsx(
    'flex items-center w-max',
    'py-2.5 esm:py-2 px-8 esm:px-6',
    'text-xl esm:text-lg text-secondColor dark:text-primaryColor dark:hover:text-white hover:text-white',
    'border-2 border-secondColor dark:border-primaryColor',
    'hover:bg-secondColor dark:hover:bg-primaryColor',
    'transition-all duration-300',
    'font-fontCode',
    'stroke-secondColor dark:stroke-primaryColor hover:stroke-white dark:hover:stroke-white',
    'gap-x-4',
    'rounded-sm',
  )

  return (
    <button className={CLASS}>
      <div className="transition-all duration-200">
        <Download size={20} />
      </div>
      <p className="font-fontCode">{TEXT}</p>
    </button>
  )
}