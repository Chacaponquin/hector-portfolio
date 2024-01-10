import { APP_IMAGES } from '../../../../modules/app/constants'

export default function Image() {
  return (
    <div>
      <div className="p-8 bg-dark-blue-10 rounded w-full flex justify-center items-center">
        <img src={APP_IMAGES.ABOUT_ME.image} alt={APP_IMAGES.ABOUT_ME.alt} className="w-full object-cover rounded" />
      </div>
    </div>
  )
}
