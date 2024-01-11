import { AppImage } from '../../../../../../modules/app/interfaces/image'

interface Props {
  image: AppImage
}

export default function Image({ image }: Props) {
  return (
    <div className="flex">
      <img
        src={image.image}
        alt={image.alt}
        className="object-cover min-w-[230px] xl:min-w-[370px] h-[200px] rounded"
      />
    </div>
  )
}
