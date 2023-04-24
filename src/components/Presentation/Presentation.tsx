// eslint-disable-next-line import/named
import { motion, AnimationControls } from 'framer-motion';
import { SimpleButton } from '../../modules/shared/components';
import { APP_IMAGES } from '../../modules/app/constants/APP_IMAGES';
import { PresentationNavBar } from './components';
import { useLanguage } from '../../modules/language/hooks';
import { ExternalLink } from '../../modules/app/components';
import { EMAIL_URL } from '../../modules/shared/constants/SOCIAL_MEDIA';

export default function Presentation({
  navBarAnimate,
  principalTextAnimate,
  meImageAnimation,
}: {
  navBarAnimate: AnimationControls;
  principalTextAnimate: AnimationControls;
  meImageAnimation: AnimationControls;
}) {
  const { HELLO_MESSAGE, CONTACT_ME, FULLSTACK_TITLE, FIRST_TEXT, SECOND_TEXT } = useLanguage({
    HELLO_MESSAGE: { en: "Hi, I'm", es: 'Hola, soy' },
    CONTACT_ME: { en: 'Contact me', es: 'Contáctame' },
    FULLSTACK_TITLE: { en: 'fullstack developer', es: 'desarrollador fullstack' },
    FIRST_TEXT: { en: 'I am a software engineer and', es: 'Soy un ingeniero de software y' },
    SECOND_TEXT: {
      en: 'dedicated mainly to the development of useful web applications.',
      es: 'dedicado principalmente al desarrollo de apliaciones web de gran utilidad',
    },
  });

  return (
    <div className="flex w-scrren 2xl:h-screen pt-36 2xl:pt-0 2xl:pb-0 pb-20 justify-center px-8 items-center">
      <div className="w-full max-w-[1000px] h-full flex flex-col justify-center">
        <PresentationNavBar navBarAnimate={navBarAnimate} />

        <div className="h-max flex items-center w-full overflow-hidden">
          <motion.div
            className="flex flex-col max-w-[600px] gap-y-2"
            transition={{ duration: 0.8 }}
            animate={principalTextAnimate}
            initial={{ translateY: '1000px' }}
          >
            <p className="font-fontCode text-2xl text-secondColor dark:text-primaryColor esm:text-xl">
              {HELLO_MESSAGE}
            </p>
            <h1 className="font-fontTitle text-7xl esm:text-6xl">Héctor Gómez</h1>
            <div className="text-xl esm:text-lg mb-6 text-black dark:text-white">
              {FIRST_TEXT} <p className="inline text-secondColor  dark:text-primaryColor">{FULLSTACK_TITLE}</p>{' '}
              {SECOND_TEXT}
            </div>

            <ExternalLink link={EMAIL_URL}>
              <SimpleButton text={CONTACT_ME} />
            </ExternalLink>
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
