interface Props {
  image: string
  alt: string
}

export default function ImageSection({ image, alt }: Props) {
  return (
    <div className="w-full rounded-tr rounded-tl dark:border-b-0 border-b-regular border-b-lightSlate">
      <img
        src={image}
        alt={alt}
        className="xl:h-[240px] h-[300px] w-full object-cover object-center rounded-tr rounded-tl"
      />
    </div>
  )
}
