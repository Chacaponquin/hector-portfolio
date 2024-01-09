interface Props {
  children: React.ReactNode
}

export default function Section({ children }: Props) {
  return <div className="max-w-[1000px] flex w-full">{children}</div>
}
