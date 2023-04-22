// eslint-disable-next-line import/named
import { motion, AnimationControls } from 'framer-motion';
import { SimpleButton } from '../../modules/shared/components';
import { APP_IMAGES } from '../../modules/app/constants/APP_IMAGES';
import { PresentationNavBar } from './components';
import { useLanguage } from '../../modules/language/hooks';

export default function Presentation({
  navBarAnimate,
  principalTextAnimate,
  meImageAnimation,
}: {
  navBarAnimate: AnimationControls;
  principalTextAnimate: AnimationControls;
  meImageAnimation: AnimationControls;
}) {
  const { HELLO_MESSAGE, CONTACT_ME } = useLanguage({
    HELLO_MESSAGE: { en: "Hi, I'm", es: 'Hola, soy' },
    CONTACT_ME: { en: 'Contact me', es: 'Contáctame' },
  });

  return (
    <div className="flex w-scrren 2xl:h-screen py-36 justify-center px-10 items-center">
      <div className="w-full max-w-[1000px] h-full flex flex-col justify-center">
        <PresentationNavBar navBarAnimate={navBarAnimate} />

        <div className="h-max flex items-center w-full overflow-hidden">
          <motion.div
            className="flex flex-col max-w-[600px] gap-y-2"
            transition={{ duration: 0.8 }}
            animate={principalTextAnimate}
            initial={{ translateY: '1000px' }}
          >
            <p className="font-fontCode text-2xl text-primaryColor">{HELLO_MESSAGE}</p>
            <h1 className="font-fontTitle text-7xl">Héctor Gómez</h1>
            <p className="text-xl mb-6 text-black dark:text-white">
              Soy un ingeniero de software y <p className="inline text-primaryColor">desarrollador fullstack</p>{' '}
              dedicado principalmente al desarrollo de apliaciones web de gran utilidad
            </p>

            <SimpleButton text={CONTACT_ME} />
          </motion.div>

          <motion.div
            animate={meImageAnimation}
            initial={{ translateX: '500px' }}
            transition={{ duration: 0.6 }}
            className="2xl:block hidden"
          >
            <img src={APP_IMAGES.ME_IMAGE.image} alt={APP_IMAGES.ME_IMAGE.alt} className="w-[350px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
