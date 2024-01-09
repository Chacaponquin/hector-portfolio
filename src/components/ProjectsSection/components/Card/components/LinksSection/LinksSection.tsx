import { ExternalLink } from '../../../../../../modules/app/components'
import { GitHub, Share } from '../../../../../../modules/icon/components'

interface Props {
  githubLink: string
  externalLink: string
  title: string
}

export default function LinksSection({ externalLink, githubLink, title }: Props) {
  return (
    <header className="flex w-full justify-between mb-2 items-center">
      <h1 className="font-fontSemiBold text-2xl">{title}</h1>

      <div className="flex gap-x-6 items-center">
        <ExternalLink
          link={githubLink}
          className="dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor"
        >
          <GitHub size={24} />
        </ExternalLink>
        <ExternalLink
          link={externalLink}
          className="dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor"
        >
          <Share size={24} />
        </ExternalLink>
      </div>
    </header>
  )
}
