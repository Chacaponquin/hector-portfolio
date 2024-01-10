interface Props {
  text: string
}

export default function Strong({ text }: Props) {
  return <strong className="font-fontMedium dark:text-blue-400 text-blue-500 font-normal">{text}</strong>
}
