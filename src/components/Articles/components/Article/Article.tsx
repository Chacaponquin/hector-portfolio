import clsx from 'clsx'
import { Article as IArticle } from '../../interfaces'
import { Button, Image } from './components'

interface Props {
  article: IArticle
}

export default function Article({ article }: Props) {
  const CARD_CLASS = clsx(
    'flex md:flex-row flex-col items-center md:gap-9 gap-6',
    'border-[3px] border-blue-4 dark:border-none',
    'h-max w-full',
    'rounded',
    'dark:bg-dark-blue-10',
    'cursor-pointer',
    'dark:shadow-lg',
    'px-8 py-6',
  )

  return (
    <div className={CARD_CLASS}>
      <Image image={article.image} />

      <div className="flex flex-col">
        <h1 className="mb-4 font-fontCodeBold xl:text-2xl text-xl">{article.title}</h1>

        <p className="mb-3 leading-7 xl:text-base text-base dark:text-scale-12 md:text-left text-justify text-scale-8">
          {article.description}
        </p>

        <Button link={article.link} />
      </div>
    </div>
  )
}
