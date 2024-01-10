interface Props {
  text: string
}

export default function Strong({ text }: Props) {
  return <strong className="font-fontMedium text-blue-400 font-normal">{text}</strong>
}
