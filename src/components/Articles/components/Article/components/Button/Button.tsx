import clsx from 'clsx'
import { ExternalLink } from '../../../../../../modules/app/components'
import { useTranslation } from '../../../../../../modules/language/hooks'
import { useState } from 'react'
import { ArrowRight } from '../../../../../../modules/icon/components'

interface Props {
  link: string
}

export default function Button({ link }: Props) {
  const { TEXT } = useTranslation({ TEXT: { en: 'Read more', es: 'Leer más' } })

  const [isHover, setIsHover] = useState(false)

  const CLASS = clsx(
    'flex items-center',
    'py-2 px-5',
    'xl:text-base text-sm',
    'text-secondColor dark:text-primaryColor dark:hover:text-white hover:text-white',
    'border-2 border-secondColor dark:border-primaryColor',
    'hover:bg-secondColor dark:hover:bg-blue-8',
    'transition-all duration-300',
    'stroke-secondColor dark:stroke-primaryColor hover:stroke-white dark:hover:stroke-white',
    'gap-x-3',
    'rounded-sm',
  )

  return (
    <div className="flex justify-end">
      <ExternalLink link={link}>
        <button className={CLASS} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <p className="font-fontCode">{TEXT}</p>

          <div className="transition-all duration-200" style={{ transform: `translateX(${isHover ? 6 : 0}px)` }}>
            <ArrowRight size={20} />
          </div>
        </button>
      </ExternalLink>
    </div>
  )
}
