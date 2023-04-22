import { SOCIAL_MEDIA } from '../../../../modules/shared/constants/SOCIAL_MEDIA';
// eslint-disable-next-line import/named
import { motion, AnimationControls } from 'framer-motion';
import { SwitchTheme } from '../../../../modules/theme/components';
import { ExternalLink } from '../../../../modules/app/components';

export default function PresentationNavBar({ navBarAnimate }: { navBarAnimate: AnimationControls }) {
  return (
    <div className="w-full flex justify-center">
      <nav className="flex justify-end text-xl px-10 absolute max-w-[1000px] top-0 py-5 gap-x-8 z-[40] overflow-y-hidden w-full">
        <div className="flex items-center md:gap-x-14 gap-x-10 text-primaryColor">
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

        <motion.div initial={{ translateY: '400px' }} transition={{ duration: 0.5 }} animate={navBarAnimate}>
          <SwitchTheme />
        </motion.div>
      </nav>
    </div>
  );
}
