import clsx from 'clsx'
import { ExternalLink } from '../../../../../../modules/app/components'
import { SOCIAL_MEDIA } from '../../../../../../modules/shared/constants'

export default function Links() {
  const BUTTON_CLASS = clsx(
    'flex items-center',
    'px-5 py-2',
    'rounded-sm',
    'gap-x-3',
    'stroke-white',
    'bg-dark-blue-9',
    'transition-all duration-200',
    'hover:opacity-70',
  )

  return (
    <div className="flex justify-end esm:justify-center flex-wrap gap-x-4 mt-6 gap-y-3">
      {SOCIAL_MEDIA.filter((m) => m.name !== 'Email').map((media, index) => (
        <ExternalLink key={index} link={media.link}>
          <button className={BUTTON_CLASS}>
            {media.icon({ size: 24 })}
            <p className="font-fontCode">{media.name}</p>
          </button>
        </ExternalLink>
      ))}
    </div>
  )
}
