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
  return (
    <div className="flex flex-col w-full rounded dark:border-none border-regular border-lightSlate transition-all duration-300 hover:-translate-y-3 h-max">
      <ImageSection image={image} alt={alt} />

      <div className="flex flex-col py-4 px-7 dark:bg-dark-blue-10">
        <LinksSection title={title} externalLink={externalLink} githubLink={githubLink} />
        <DescriptionSection description={description} />
        <MadeWithSection madeWith={madeWith} />
      </div>
    </div>
  )
}
