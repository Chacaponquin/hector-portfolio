interface Props {
  madeWith: string[]
}

export default function MadeWithSection({ madeWith }: Props) {
  return (
    <div className="flex flex-wrap w-full gap-x-2 mt-3 gap-y-2">
      {madeWith.map((made, index) => (
        <div
          key={index}
          className="font-fontCode dark:text-white text-white py-1 px-3 rounded-sm dark:bg-black/20 text-sm bg-secondColor"
        >
          {made}
        </div>
      ))}
    </div>
  )
}
