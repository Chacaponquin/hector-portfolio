import { Fragment } from 'react'

interface Props {
  title: string
  description: string
}

export default function CardDescription({ title, description }: Props) {
  return (
    <Fragment>
      <div>
        <h1 className="font-fontSemiBold text-2xl mb-1">{title}</h1>
      </div>

      <div>
        <p className="dark:text-lightSlate text-base">{description}</p>
      </div>
    </Fragment>
  )
}
