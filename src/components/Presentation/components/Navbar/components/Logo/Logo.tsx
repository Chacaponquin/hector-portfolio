import { APP_IMAGES } from '../../../../../../modules/app/constants/APP_IMAGES';

export default function Logo() {
  return (
    <div className="w-max">
      <img
        src={APP_IMAGES.LOGO.image}
        alt={APP_IMAGES.LOGO.alt}
        className="w-[40px] min-w-[40px] esm:w-[30px] esm:min-w-[30px]"
      />
    </div>
  );
}
