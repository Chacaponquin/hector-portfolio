import clsx from 'clsx'
import { DescriptionSection, ImageSection, LinksSection, MadeWithSection } from './components'

interface Props {
  image: string
  alt: string
  madeWith: Array<string>
  description: string
  externalLink: string
  githubLink: string
  title: string
}

export default function Card({ image, alt, description, externalLink, githubLink, madeWith, title }: Props) {
  const CLASS = clsx(
    'flex flex-col w-full h-max',
    'rounded',
    'transition-all duration-300 hover:-translate-y-2',
    'border-2 border-blue-4 dark:border-none',
  )

  return (
    <div className={CLASS}>
      <ImageSection image={image} alt={alt} />

      <div className="flex flex-col py-4 px-7 dark:bg-dark-blue-10 rounded-br rounded-bl">
        <LinksSection title={title} externalLink={externalLink} githubLink={githubLink} />
        <DescriptionSection description={description} />
        <MadeWithSection madeWith={madeWith} />
      </div>
    </div>
  )
}
