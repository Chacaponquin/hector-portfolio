import clsx from 'clsx'
import { Article as IArticle } from '../../interfaces'
import { Button, Image } from './components'
import { Variants, motion } from 'framer-motion'

interface Props {
  article: IArticle
  left: boolean
}

export default function Article({ article, left }: Props) {
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

  const variants: Variants = {
    offscreen: {
      x: left ? -100 : 100,
      opacity: 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  return (
    <motion.div
      className={CARD_CLASS}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variants}
    >
      <Image image={article.image} />

      <div className="flex flex-col">
        <h1 className="mb-4 font-fontCodeBold xl:text-2xl text-xl">{article.title}</h1>

        <p className="mb-3 leading-7 xl:text-base text-base dark:text-scale-12 md:text-left text-justify text-scale-8">
          {article.description}
        </p>

        <Button link={article.link} />
      </div>
    </motion.div>
  )
}
