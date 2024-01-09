interface Props {
  description: string
}

export default function DescriptionSection({ description }: Props) {
  return <div className="text-base text-scale-11">{description}</div>
}
