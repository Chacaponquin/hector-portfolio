import { AppImage } from '../../../../../../modules/app/interfaces/image'

interface Props {
  image: AppImage
  title: string
}

export default function Image({ image, title }: Props) {
  return (
    <div className="flex">
      <img src={image.image} alt={title} className="object-cover min-w-[230px] xl:min-w-[370px] h-[200px] rounded" />
    </div>
  )
}
