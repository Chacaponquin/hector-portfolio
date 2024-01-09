// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion';
import { APP_IMAGES } from '../../../../modules/app/constants/APP_IMAGES';

interface Props {
  meImageAnimation: AnimationControls;
}

export default function Image({ meImageAnimation }: Props) {
  return (
    <motion.div
      animate={meImageAnimation}
      initial={{ translateX: '500px' }}
      transition={{ duration: 0.6 }}
      className="2xl:block hidden"
    >
      <img src={APP_IMAGES.ME_IMAGE.image} alt={APP_IMAGES.ME_IMAGE.alt} className="w-[350px]" />
    </motion.div>
  );
}
