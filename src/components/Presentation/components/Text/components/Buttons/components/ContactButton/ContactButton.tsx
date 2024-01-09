import { useState } from 'react'
import { ArrowRight } from '../../../../../../../../modules/icon/components'
import { useTranslation } from '../../../../../../../../modules/language/hooks'
import { ExternalLink } from '../../../../../../../../modules/app/components'
import { EMAIL_URL } from '../../../../../../../../modules/shared/constants/SOCIAL_MEDIA'
import clsx from 'clsx'

export default function ContactButton() {
  const { CONTACT_ME } = useTranslation({ CONTACT_ME: { en: 'Contact me', es: 'Contáctame' } })

  const [isHover, setIsHover] = useState(false)

  const CLASS = clsx(
    'flex items-center w-max',
    'py-2.5 esm:py-2 px-8 esm:px-6',
    'text-xl esm:text-lg text-secondColor dark:text-primaryColor dark:hover:text-white hover:text-white',
    'border-2 border-secondColor dark:border-primaryColor',
    'hover:bg-secondColor dark:hover:bg-primaryColor',
    'transition-all duration-300',
    'font-fontCode',
    'stroke-secondColor dark:stroke-primaryColor hover:stroke-white dark:hover:stroke-white',
    'gap-x-2',
    'rounded-sm',
  )

  return (
    <ExternalLink link={EMAIL_URL}>
      <button className={CLASS} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <p className="font-fontCode">{CONTACT_ME}</p>
        <div className="transition-all duration-200" style={{ transform: `translateX(${isHover ? 10 : 0}px)` }}>
          <ArrowRight size={20} />
        </div>
      </button>
    </ExternalLink>
  )
}
