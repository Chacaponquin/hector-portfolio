import clsx from 'clsx'
import { AppImage } from '../../../../../../../../../../../../../../modules/app/interfaces/image'
import { LANGUAGES } from '../../../../../../../../../../../../../../modules/language/constants'
import { useLanguage } from '../../../../../../../../../../../../../../modules/language/hooks'

interface Props {
  language: LANGUAGES
  image: AppImage
}

export default function Button({ language, image }: Props) {
  const { handleChangeLanguage, language: actualLanguage } = useLanguage()

  const IMG_SIZE = 30
  const isSelected = actualLanguage === language

  const CLASS = clsx('flex items-center', 'gap-5', 'px-4 py-2', 'rounded-full', {
    'bg-secondColor dark:bg-blue-8': isSelected,
    'text-white': isSelected,
    'border-[1px] border-scale-10': !isSelected,
  })

  return (
    <button className={CLASS} onClick={() => handleChangeLanguage(language)}>
      <img
        src={image.image}
        alt={image.alt}
        style={{
          maxWidth: `${IMG_SIZE}px`,
          minWidth: `${IMG_SIZE}px`,
          maxHeight: `${IMG_SIZE}px`,
          minHeight: `${IMG_SIZE}px`,
        }}
      />

      <p className="text-base uppercase font-fontCode">{language}</p>
    </button>
  )
}
