// eslint-disable-next-line import/named
import { motion, AnimationControls } from 'framer-motion';
import { SimpleButton } from '../../modules/shared/components';
import { APP_IMAGES } from '../../modules/app/constants/APP_IMAGES';
import { PresentationNavBar } from './components';

export default function Presentation({
  navBarAnimate,
  principalTextAnimate,
  meImageAnimation,
}: {
  navBarAnimate: AnimationControls;
  principalTextAnimate: AnimationControls;
  meImageAnimation: AnimationControls;
}) {
  return (
    <div className="flex w-scrren h-screen justify-center px-10 items-center">
      <div className="w-full max-w-[1000px] h-full flex flex-col justify-center">
        <PresentationNavBar navBarAnimate={navBarAnimate} />

        <div className="h-max flex items-center w-full overflow-hidden">
          <motion.div
            className="flex flex-col max-w-[600px] gap-y-2"
            transition={{ duration: 0.8 }}
            animate={principalTextAnimate}
            initial={{ translateY: '1000px' }}
          >
            <p className="font-fontCode text-2xl text-primaryColor">Hi, I'm</p>
            <h1 className="font-fontTitle text-7xl">Héctor Gómez</h1>
            <p className="text-xl mb-6 text-black dark:text-white">
              Soy un ingeniero de software y <p className="inline text-primaryColor">desarrollador fullstack</p>{' '}
              dedicado principalmente al desarrollo de apliaciones web de gran utilidad
            </p>

            <SimpleButton text="Contáctame" />
          </motion.div>

          <motion.div animate={meImageAnimation} initial={{ translateX: '500px' }} transition={{ duration: 0.6 }}>
            <img src={APP_IMAGES.ME_IMAGE.image} alt={APP_IMAGES.ME_IMAGE.alt} className="w-[350px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
