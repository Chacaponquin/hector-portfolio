import React from 'react';
import { SOCIAL_MEDIA } from '../../constants/SocialMedia';
import { motion, AnimationControls } from 'framer-motion';
import { SwitchTheme } from '../../../../modules/theme/components';

export default function PresentationNavBar({ navBarAnimate }: { navBarAnimate: AnimationControls }) {
  return (
    <nav className="flex justify-end text-xl absolute w-[1000px] top-0 py-5 gap-x-8">
      <div className="flex items-center gap-x-14 text-primaryColor">
        {SOCIAL_MEDIA.map((el, i) => (
          <a
            href={el.link}
            target="_blank"
            rel="noreferrer"
            key={i}
            className="h-max overflow-y-hidden stroke-primaryColor"
          >
            <motion.div
              animate={navBarAnimate}
              className="flex items-center h-max gap-x-3 transition-all duration-300 hover:brightness-200"
              initial={{ translateY: '100%' }}
              transition={{ duration: 0.5 }}
            >
              {el.icon}
              <h1 className="font-fontBlack font-fontCode">{el.name}</h1>
            </motion.div>
          </a>
        ))}
      </div>

      <div>
        <SwitchTheme />
      </div>
    </nav>
  );
}
