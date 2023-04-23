import { SOCIAL_MEDIA } from '../../../../modules/shared/constants/SOCIAL_MEDIA';
// eslint-disable-next-line import/named
import { motion, AnimationControls } from 'framer-motion';
import { SwitchTheme } from '../../../../modules/theme/components';
import { ExternalLink } from '../../../../modules/app/components';
import { APP_IMAGES } from '../../../../modules/app/constants/APP_IMAGES';

export default function PresentationNavBar({ navBarAnimate }: { navBarAnimate: AnimationControls }) {
  return (
    <div className="w-full flex justify-center px-8 absolute top-0 left-0">
      <nav className="flex items-center justify-between text-xl max-w-[1000px] py-5 z-[40] overflow-y-hidden w-full">
        <div className="w-max">
          <img
            src={APP_IMAGES.LOGO.image}
            alt={APP_IMAGES.LOGO.alt}
            className="w-[40px] min-w-[40px] esm:w-[30px] esm:min-w-[30px]"
          />
        </div>

        <div className="flex md:gap-x-8 gap-x-5">
          <div className="flex items-center text-primaryColor md:gap-x-10 gap-x-6">
            {SOCIAL_MEDIA.map((el, i) => (
              <ExternalLink link={el.link} key={i} className="h-max stroke-primaryColor">
                <motion.div
                  animate={navBarAnimate}
                  className="flex items-center h-max gap-x-3 transition-all duration-300 hover:brightness-200 fill-none"
                  initial={{ translateY: '400px' }}
                  transition={{ duration: 0.5 }}
                >
                  {el.icon({ size: 20 })}
                  <h1 className="font-fontBlack font-fontCode xl:block hidden">{el.name}</h1>
                </motion.div>
              </ExternalLink>
            ))}
          </div>

          <motion.div
            initial={{ translateY: '400px' }}
            transition={{ duration: 0.5 }}
            animate={navBarAnimate}
            className="exsm:hidden"
          >
            <SwitchTheme />
          </motion.div>
        </div>
      </nav>
    </div>
  );
}
