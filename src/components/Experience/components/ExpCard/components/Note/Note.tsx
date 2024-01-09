interface Props {
  text: string
}

export default function Note({ text }: Props) {
  return (
    <div className="flex items-start gap-x-3 mb-1">
      <div className="min-w-[6px] min-h-[6px] rounded-full bg-blue-2" style={{ transform: `translateY(8.5px)` }}></div>

      <p>{text}</p>
    </div>
  )
}
