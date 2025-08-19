interface Props {
  description: string
}

export default function DescriptionSection({ description }: Props) {
  return <div className="mb-3 text-base text-scale-9 dark:text-scale-11">{description}</div>
}
